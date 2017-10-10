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
    this.flags = [
      { pais: 'Perú', src: flag_peru, cod: '+51', length: 9 },
      { pais: 'Chile', src: flag_chile, cod: '+56', length: 9 },
      { pais: 'Mexico', src: flag_mexico, cod: '+52', length: 10 }];
    this.state = {
      currentFlag: 0,
      showPin: false,
      validar: false,
      next: false
    }
  }
  changeFlag(num) {
    this.setState({
      currentFlag: num,
      validar: false
    });
  }
  render() {
    const { model } = this.props;
    const onInputChange = (e) => {
      if (e.target.value.length === this.flags[this.state.currentFlag].length) {
        this.setState({
          validar: true
        });
      } else {
        this.setState({
          validar: false
        });
      }
    }
    const mostrarPin = () => {
      this.setState({
        showPin: true,
        next: true
      });
    }
    return (
      <div>
        <header className="text-center">
          <div className="regresar">
            <NavLink to="/home">
              <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
            </NavLink>
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
                    <img className="img-responsive" src={this.flags[this.state.currentFlag].src} alt='flag_peru' />
                    <span className="caret"></span>
                  </div>
                  <ul className="dropdown-menu">
                    {this.flags.map((a, index) => {
                      return <li><a><img className="img-responsive" src={a.src} alt='flag_peru' onClick={() => this.changeFlag(index)} /> {a.pais}</a></li>
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-xs-2">
                <input type="text" id="codigo" value={this.flags[this.state.currentFlag].cod} />
              </div>
              <div className="col-sm-7 col-xs-7" >
                <input type="number" id="telefono" placeholder="999999999"
                  onKeyUp={onInputChange}
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
        <section className="next">
          {this.state.next && <NavLink to={"/pin"} className="btn btn-lg btn-next" > Next</NavLink>}
          {!this.state.next && <button className={this.state.validar ? "btn-lg btn-next" : "btn-lg btn-next disabled"} disabled={!this.state.validar} onClick={mostrarPin}>Next</button>}
        </section>
      </div>
    );
  }
}

export default SingUp;