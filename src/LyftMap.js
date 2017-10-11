import React, { Component } from 'react';
import logo from './img/logo-pink.png';
import usuario from './img/usuario.png';
import carro from './img/carro.png';
import './App.css';
import './map.css';
import GoogleMaps from './GoogleMaps';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';

import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
class HeaderMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}

	render() {
		const { model } = this.props;
		const open = () => {
			this.setState({
				show: true
			})
		}
		const close = () => {
			this.setState({
				show: false
			})
		}
		return (
			<header id="mapa_header">
				<img className="img-responsive" id='usuario_logo' onClick={open} src={usuario} alt="" />
				<img className="img-responsive" src={logo} alt="" />
				<span className="fa-stack fa-lg fa-2x">
					<i className="fa fa-circle fa-stack-2x"></i>
					<i className="fa fa-gift fa-stack-1x fa-inverse"></i>
				</span>
				<div id="mySidenav" className="sidenav" style={{ width: this.state.show ? '250px' : 0 }}>
					<a href="javascript:void(0)" className="closebtn" onClick={close}>&times;</a>
					<div id="datos_usuario">
						<div><strong>Name: </strong>{model.userInfo.name}</div>
						<div><strong>Surname: </strong>{model.userInfo.surname}</div>
						<div><strong>Phone: </strong>{model.userInfo.phone}</div>
						<div><strong>Email: </strong>{model.userInfo.email}</div>
					</div>
				</div>
			</header>
		);
	}
}
const MapPrice = ({ model }) => {
	return (
		<div>
			<div>
				<div className="well precio">
					<img src={carro} alt="carro" />
					<span><h4>Lyft</h4><p>Fast ride 4 seats</p></span>
				</div>
				<div className="well precio">
					<div className="text-center">
						<p id="precio">{model.precio}</p>
						<p>Price stimated</p>
					</div>
				</div>

			</div>
			<NavLink to={"/nextTrip"} type="button" className="btn btn-lg" id="solicitar">Request Lyft</NavLink>
		</div>
	);
}
const MapSetpickup = ({ model }) => {
	const onPathBntClick = () => {
		model.setIsRouting();
	}
	return (
		<div>
			<div id="origen" className="form-control"></div>
			<ReactGoogleAutocomplete
				onPlaceSelected={(place) => {
					model.setTarget(place);
				}}
				componentRestrictions={{ country: "pe" }}
				id="destino" className="form-control"
			/>
			<button type="button" className="btn" id="ruta" onClick={onPathBntClick}>Set pickup</button>
		</div>
	);
}

const MapForm = ({ model }) => {
	return (
		<div className="container">
			<div className="row">
				<div id="menu_mapa" className="col-sm-12 col-xs-12">
					{model.isRouting ?
						<MapPrice model={model} /> :
						<MapSetpickup model={model} />

					}
				</div>
			</div>
		</div>
	);
}
const LyftMap = ({ model }) => {

	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: [],
		isFiltering: false,
		isRouting: model.isRouting
	};
	const {
					properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;

	const setActiveProperty = (property, scroll) => {
		model.setActiveProperty(property);

		const { index } = property;
		if (scroll) {
			const target = `#card-${index}`;
		}
	}


	return (<div>

		<HeaderMap model={model} />

		<GoogleMaps
			model={model}
			properties={properties}
			activeProperty={activeProperty}
			setActiveProperty={setActiveProperty}
			filteredProperties={filteredProperties}
			isFiltering={isFiltering}
			isRouting={isRouting}
		/>

		<MapForm model={model} />

	</div>);
}


export default LyftMap;