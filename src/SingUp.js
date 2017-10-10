import React, { Component } from 'react';

import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';

import './signUp.css';
import Utils from './Utils';
import flag_chile from './img/flag_chile.png';
import flag_peru from './img/flag_peru.png';
import flag_mexico from './img/flag_mexico.png';

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.inputNumber = undefined;
    this.newPin = [];
    this.state = {
      number: [],
      showPin : false,
      phoneNumber : undefined
    }
  }

  pinGenerator(){
    let pin = Math.floor(Math.random() * (999-100));
    return pin;
  }

  getNumber(input){
    console.log(input);

    if(input.length === 9){
      this.setState({
        showPin: true
      });
      this.pinGenerator();
    }else{
      this.setState({
        showPin: false
      })
    }
  }


  render() {
    return (
      <div>
        <header className="text-center">
          <div className="regresar">
            <a href="javascript:window.history.back();"><i className="fa fa-angle-left fa-3x" aria-hidden="true"></i></a>
          </div>
          <h1>Sign up</h1>
          <h4>Join now for free ride credit</h4>
          <hr />
        </header>
        
        <section className="container">
          <div className="input-close container">
            <div className="row">
              <div className="col-sm-3 col-xs-3">
                <div className="dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <img className="img-responsive" src={flag_peru} alt='flag_peru' />
                    <span className="caret"></span>
                  </div>
                  <ul className="dropdown-menu">
                    <li><a id="+51" ><img className="img-responsive" src={flag_peru} alt='flag_peru' /> Perú</a></li>
                    <li><a id="+56" ><img className="img-responsive" src={flag_chile} alt='flag_chile' /> Chile</a></li>
                    <li><a id="+52" ><img className="img-responsive" src={flag_mexico} alt='flag_mexico' /> Mexico</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-xs-2">
                <input type="text" id="codigo" value="+51" />
              </div>
              <div className="col-sm-7 col-xs-7" >
                <input type="number" id="telefono" placeholder="999999999" maxLength='9' minLength='9' 
                  value={this.valorInput}
                  onChange={ e=>(this.inputNumber = e.target) } />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 text-center">
              <p>We'll send you a text to verify your phone</p>
            </div>
          </div>
          <div className="ocultar alert alert-warning text-center">
            Your PIN number is: <span id="cod-lab"> LAB - {this.pinGenerator()}</span>
          </div>
        </section>     
        
        <section className="next">
          <NavLink to={"/pin"} className="btn-lg" id="boton_telefono">
            Next
          </NavLink>
        </section>
      </div>
    );
  }
}

export default SingUp;