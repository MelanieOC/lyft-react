import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';

import './App.css';

class Pin extends Component {
	constructor(props) {
		super(props);
		this.currentPIN = [];
		this.state = {
			showPin: false,
			checked: false,
			next: false,
			newPin: undefined
		}
	}

	onInputChange = (e) => {
		this.currentPIN.push(e.target.value);
		console.log(this.currentPIN);
		return this.currentPIN;
	}
	getPinCode() {
		if (this.currentPIN.length === 3) {
			this.setState({
				checked: true
			});
			this.currentPIN = parseInt(this.currentPIN.join(''));
		} else {
			this.currentPIN = parseInt(this.currentPIN.join('').trim());
			console.log(this.currentPIN)
			this.setState({
				checked: true
			})
		}
	}

	checkPinCode() {
		console.log(this.currentPIN);
		if (this.currentPIN === 523) {
			this.setState({
				next: true
			})
		}else{
			this.setState({
				checked: false,
				next: false
			});
		}
	}
	render() {
		const Header = () => {
			return (
				<div>
					<header className="text-center">
						<div className="prevPage">
							<NavLink to="/signup">
								<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
							</NavLink>
						</div>
						<h3>Verify phone number</h3>
						<h5>Join now for free ride credit</h5>
						<hr />
					</header>
				</div>
			)
		}

		const NextBtn = () => {
			return (
				<div>
					<section className="next">
						{this.state.next && <NavLink to={"/signup-form"} className="btn btn-lg btn-next" > Next</NavLink>}
						{!this.state.next && <button className={this.state.checked ? "btn-lg btn-next" : "btn-lg btn-next disabled"} disabled={!this.state.checked} onClick={(e) => { this.checkPinCode(e) }}>Next</button>}
					</section>
				</div>
			)
		}

		return (
			<div>
				<div> {Header()} </div>
				<section className="container">
					<div className="alert text-center">
						Your PIN number is: <span id="cod-lab"> LAB - 523</span>
					</div>

					<div className="row">
						<form className='form-inline'>
							<div className="col-sm3 col-xs-3 text-center">
								<label className="lab">
									<strong>LAB</strong>
								</label>
							</div>
							<div className='form-group'>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1"
										onKeyUp={(e) => { this.onInputChange(e) }} />
								</div>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1"
										onKeyUp={(e) => { this.onInputChange(e) }} />
								</div>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1"
										onKeyUp={(e) => { this.onInputChange(e) }} onBlur={() => { this.getPinCode() }} />
								</div>
							</div>
						</form>
					</div>

					<div className="row text-center">
						Enter the code sent to <p id="prevPhoneNum"></p>
					</div>
				</section>

				<div> {NextBtn()} </div>
			</div>
		);
	}
}

export default Pin;