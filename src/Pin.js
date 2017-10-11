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

	codeGenerator(){
		let pin = Math.floor(Math.random() * (999 - 100));
		this.setState({
			newPin : pin
		})
		return pin;
	}

	onInputChange = (e) =>{
		this.currentPIN.push(e.target.value);
		console.log(this.currentPIN);
		return this.currentPIN;
	}
	getPinCode(){	
		if(this.currentPIN.length === 3){
			this.setState({
				checked:true
			})
		}else{
			this.setState({
				checked: false
			})
		}
	}

	checkPinCode(){
		this.currentPIN = this.currentPIN.join('');
		console.log(this.currentPIN);
		if(this.currentPIN === this.state.pin){
			this.setState({
				next:true,
				checked:true
			})
		}
	}
	render() {
		const showPin = () => {
			this.setState({
				showPin: true,
				next: true
			});
		}
		 
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

				<section className="container">
					<div className="alert text-center">
              			Your PIN number is: <span id="cod-lab"> LAB - {()=>{this.codeGenerator()}}</span>
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
									onKeyUp={(e) => { this.onInputChange(e) }}/>
								</div>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1" 
									onKeyUp={(e) => { this.onInputChange(e) }}/>
								</div>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1" 
									onKeyUp={(e) => { this.onInputChange(e) }}  onBlur={()=> {this.getPinCode()}}/>
								</div>
							</div>
						</form>
					</div>

					<div className="row text-center">
						Enter the code sent to <p id="prevPhoneNum"></p>
					</div>
				</section>

				<section className="next">
					{this.state.next && <NavLink to={"/signup-form"} className="btn btn-lg btn-next" > Next</NavLink>}
					{!this.state.next && <button className={this.state.checked ? "btn-lg btn-next" : "btn-lg btn-next disabled"} disabled={!this.state.checked} onClick={(e) => { this.checkPinCode(e) }}>Next</button>}
				</section>
			</div>
		);
	}
}

export default Pin;