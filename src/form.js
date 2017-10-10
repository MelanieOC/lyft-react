import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import './Forms.css';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goFordward: false,
			validacion: false,
			siguiente: false
		}
	}

	render() {
		const { model } = this.props;

		const onInputChange = (e) => {
			this.setState({
				goFordward: e.target.checked
			});
		}
		const validaciones = () => {
			this.setState({
				validacion: true
			});
			if (model.nombre === '' && model.apellido === '' && model.email === '' && !(/\S+@\S+\.\S+/.test(model.email))) {
				this.setState({
					siguiente: false
				});
			} else {
				this.setState({
					siguiente: true
				});
			}
		}
		return (
			<div>
				<header className="text-center">
					<div className="regresar">
						<NavLink to="/signup">
							<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
						</NavLink>
					</div>
					<h1>Sign up</h1>
					<h4>Join now for free ride credit</h4>
					<hr />
				</header>
				<section className="container">
					<div className="input-close">
						<div className="row">
							<div className="col-sm-2 col-xs-2 text-center">
								<i className="fa fa-user-o fa-2x"></i>
							</div>
							<div className="col-sm-5 col-xs-5">
								<input type="text" defaultValue='' placeholder="First Name" onChange={e => model.nombre = e.target.value} />
								{model.nombre === '' && this.state.validacion && <p className="error">Please enter a name</p>}
							</div>
							<div className="col-sm-5 col-xs-5">
								<input type="text" defaultValue='' placeholder="Last Name" onChange={e => model.apellido = e.target.value} />
								{model.apellido === '' && this.state.validacion && <p className="error">Please enter a last name</p>}

							</div>
						</div>
					</div>
					<div className="input-close">
						<div className="row">
							<div className="col-sm-2 col-xs-2 text-center">
								<i className="fa fa-envelope-o fa-2x"></i>
							</div>
							<div className="col-sm-8 col-xs-8">
								<input type="email" defaultValue='' placeholder="Email" onChange={e => model.email = e.target.value} />
								{model.email === '' && this.state.validacion && <p className="error">Please enter an email</p>}
								{model.email !== '' && !(/\S+@\S+\.\S+/.test(model.email)) && this.state.validacion && <p className="error">Not a valid email</p>}

							</div>
						</div>
					</div>
				</section>
				<section className="text-center">
					<div className="row">
						<div className="col-xs-12 col-sm-12">
							<div className="checkbox">
								<label><input id="check" type="checkbox" onChange={onInputChange} />I agree to Lyft's <a href="#"> Terms of Service</a></label>
							</div>
						</div>
					</div>
				</section>
				<section className="next">
					{this.state.siguiente && <NavLink to={"/lyftmap"} className="btn btn-lg btn-next" id="boton_usuario">Next</NavLink>}
					{!this.state.siguiente && <button className={this.state.goFordward ? "btn-lg btn-next" : "btn-lg btn-next disabled"} disabled={!this.state.goFordward} onClick={validaciones} id="boton_usuario">Next</button>}
				</section>

			</div>
		);
	}
}

export default Form;