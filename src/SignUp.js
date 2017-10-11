import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

import './signUp.css';
import flag_chile from './img/flag_chile.png';
import flag_peru from './img/flag_peru.png';
import flag_mexico from './img/flag_mexico.png';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.flags = [
      { country: 'Perú', src: flag_peru, code: '+51', length: 9 },
      { country: 'Chile', src: flag_chile, code: '+56', length: 9 },
      { country: 'Mexico', src: flag_mexico, code: '+52', length: 10 }];
    this.state = {
      currentFlag: 0,
      showPin: false,
      checked: false,
      next: false
    }
  }
  changeFlag(num) {
    this.setState({
      currentFlag: num,
      checked: false
    });
  }
  render() {
    const { model } = this.props;
    const onInputChange = (e) => {
      if (e.target.value.length === this.flags[this.state.currentFlag].length) {
        this.setState({
          checked: true
        });
      } else {
        this.setState({
          checked: false
        });
      }
    }
    const showPin = () => {
      this.setState({
        showPin: true,
        next: true
      });
    }

    const Header = () => {
			return (
				<div>
					<header className="text-center">
            <div className="prevPage">
              <NavLink to="/home">
                <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
              </NavLink>
            </div>
            <h1>Sign up</h1>
            <h4>Join now for free ride credit</h4>
            <hr />
          </header>
				</div>
			)
    }
    
    const NextBtn = () => {
      return(
        <div>
          <section className="next">
            {this.state.next && <NavLink to={"/pin"} className="btn btn-lg btn-next" > Next</NavLink>}
            {!this.state.next && <button className={this.state.checked ? "btn-lg btn-next" : "btn-lg btn-next disabled"} disabled={!this.state.checked} onClick={showPin}>Next</button>}
          </section>
        </div>
      )
    }

    return (
      <div>
        <div> {Header()} </div>
        <section className="container">
          <div className="input-close container">
            <div className="row">
              <div className="col-sm-3 col-xs-3">
                <div className="dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <img className="img-responsive" src={this.flags[this.state.currentFlag].src} alt='flag_peru' />
                    <span className="caret"></span>
                  </div>
                  <ul className="dropdown-menu">
                    {this.flags.map((a, index) => {
                      return <li key={index}><a><img className="img-responsive" src={a.src} alt='flag_peru' onClick={() => this.changeFlag(index)} /> {a.country}</a></li>
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-xs-2">
                <input type="text" value={this.flags[this.state.currentFlag].code} />
              </div>
              <div className="col-sm-7 col-xs-7" >
                <input type="number" id="telefono" placeholder="999999999"
                  onKeyUp={onInputChange} minLength='9'
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 text-center">
              <p>We'll send you a text to verify your phone</p>
            </div>
          </div>
          {this.state.showPin &&
            <div className=" alert alert-warning text-center">
              Your PIN number is: <span id="cod-lab"> LAB - {Math.floor(Math.random() * (999 - 100))}</span>
            </div>
          }
        </section>
        <div> {NextBtn()} </div>
      </div>
    );
  }
}

export default SignUp;