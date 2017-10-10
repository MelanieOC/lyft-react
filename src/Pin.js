import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class Pin extends Component {
	render() {
		return (
			<div>
				<header className="text-center">
					<div className="regresar">
						<NavLink to="/signup">
							<i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
						</NavLink>
					</div>
					<h3>Verify phone number</h3>
					<h5>Join now for free ride credit</h5>
					<hr />
				</header>

				<section className="container">
					<div className="row">
						<form className='form-inline'>
							<div className="col-sm3 col-xs-3 text-center">
								<label className="lab">
									<strong>LAB</strong>
								</label>
							</div>
							<div className='form-group'>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1" />
								</div>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1" />
								</div>
								<div className="col-sm3 col-xs-3 text-center">
									<input type="text" className="text-center randomCode" maxLength="1" />
								</div>
							</div>
						</form>
					</div>

					<div className="row text-center">
						Enter the code sent to <p id="prevPhoneNum"></p>
					</div>
					<div className="row text-center">
						<button type="submit" className="btn" id="codeGenerator">
							Resend code
            </button>
					</div>
				</section>

				<section className="next">
					<NavLink to={"/signup-form"} className="btn-lg" id="boton_usuario">Next</NavLink>
				</section>
			</div>
		);
	}
}

export default Pin;
/**
 * (function() {
	let loadSite = function(){
		let getNumber = localStorage.getItem('phoneNum');
		$('#prevPhoneNum').text(getNumber);
		$('#codeGenerator').click(generateCode);
		$('.randomCode').keyup(checkInputInfo).keyup(nextBlankSpace);
		$('#checkCode').click(checkCode);
		generateCode();
	}
	let generateCode = function(){
		let codeArray = [];
		let code = '';
		let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for(let i = 0; i < 3; i++){
			code += abc.charAt(Math.floor(Math.random()*abc.length));
		}
		console.log(code);
		localStorage.setItem('savedNumber',code);
		swal("Your Lyft code is:", "LAB " + code );	
	}

	let checkInputInfo = function(){	
		let btn_checkInfo = $(this).parents('.container').next().children().eq(0);
		console.log(btn_checkInfo);
		let isOk = true;
		$('.randomCode').each(function(index, element){
			let inputsLength = $(element).val().trim().length;
			isOk = isOk && (inputsLength === 1);
		});
		if(isOk){
			btn_checkInfo.removeAttr('disabled');
		}else{
			btn_checkInfo.attr('disabled',true);
		}	
	}

	let loadHTML = function(){
		setTimeout(function(){
			location.href = "registrationData.html";
		},700);
	}

	let checkCode = function(serie){
		let arrayCode = [];
		$('.randomCode').each(function(index, element){
			let digitValue = $(element).val();
			digitValue = digitValue.toUpperCase();
			arrayCode.push(digitValue);
		});
		let codeChain = arrayCode.join('');
		let getSavedNumber = localStorage.getItem('savedNumber');
		if(codeChain === getSavedNumber){
			swal("Welcome to Lyft!",'Your code is valid', "success");	
			loadHTML();
		}else{	
			swal ( "Something went wrong" ,  "Try again!" ,  "error" );
		}
		$('randomCode').val('');
	}
	let nextBlankSpace = function(){
		let element = $(this).val().length;
		let nextSibling = $(this).parent().next().children();
		let atrrElement = $(this).attr('maxlength');
		if (element == atrrElement){
			nextSibling.focus();	
		}
	}
	$(document).ready(loadSite);
})();
 */