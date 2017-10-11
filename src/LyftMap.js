import React, { Component } from 'react';
import logo from './img/logo-pink.png';
import usuario from './img/usuario.png';
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

const HeaderMap = ({ model }) => {
	return (
		<header id="mapa_header">
			<img className="img-responsive" id='usuario_logo' src={usuario} alt="" />
			<img className="img-responsive" src={logo} alt="" />
			<span className="fa-stack fa-lg fa-2x">
				<i className="fa fa-circle fa-stack-2x"></i>
				<i className="fa fa-gift fa-stack-1x fa-inverse"></i>
			</span>
			<div id="mySidenav" className="sidenav">
				<a href="javascript:void(0)" className="closebtn">&times;</a>
				<div id="datos_usuario">
				</div>
			</div>
		</header>
	);
}

const MapForm = ({model}) => {
	const onPathBntClick = () => {
		model.setIsRouting();
	}
	return (
		<div className="container">
			<div className="row">
				<div id="menu_mapa" className="col-sm-12 col-xs-12">
					<div className="ocultar">
						<div className="well precio">
							<img src="assets/img/carro.png" alt="carro" />
							<span><h4>Lyft</h4><p>Fast ride 4 seats</p></span>
						</div>
						<div className="well precio">
							<div className="text-center">
								<p id="precio"></p>
								<p>Price stimated</p>
							</div>
						</div>
					</div>
					<div id="origen" className="form-control"></div>
					<ReactGoogleAutocomplete
						onPlaceSelected={(place) => {
							model.setTarget(place);
						}}
						componentRestrictions={{ country: "pe" }}
						id="destino" className="form-control"
					/>
					<button type="button" className="btn" onClick={onPathBntClick}>Set pickup</button>
					<button type="button" className="btn" id="solicitar" data-toggle="modal" data-target="#myModal">Request Lyft</button>
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

		<HeaderMap />

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