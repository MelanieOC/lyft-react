import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Model {
  constructor() {
    this.phoneNumbers = [];
    this.inputValue = null;
    this.render = undefined;
  }

  subscribe(render) {
    this.render = render;
  }
  inform() {
    console.log(this.phoneNumbers.map(e => e.text));
    this.render();
  }
  addTodo(text) {
    this.phoneNumbers.push({
      //id: Utils.uuid(),
      text: text,
      completed: false
    });
    this.inform();
  }
  updateTodo(index, todo) {
    this.phoneNumbers[index] = todo;
    this.inform();
  }
  removeTodo(todo) {
    this.phoneNumbers = this.phoneNumbers.filter(item => item !== todo);
    this.inform();
  }
}

const App = () => {
  return (
    <div>
      <header className="text-center">
        <div className="regresar">
          <a href="index.html"><i className="fa fa-angle-left fa-3x" aria-hidden="true"></i></a>
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
                  <img className="img-responsive" src="src/img/flag_peru.png" />
                  <span className="caret"></span>
                </div>
                <ul className="dropdown-menu">
                  <li><a id="+51" href="#"><img className="img-responsive" src="src/img/flag_peru.png" /> Perú</a></li>
                  <li><a id="+56" href="#"><img className="img-responsive" src="src/img/flag_chile.png" /> Chile</a></li>
                  <li><a id="+52" href="#"><img className="img-responsive" src="src/img/flag_mexico.png" /> Mexico</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-xs-2">
              <input type="text" id="codigo" value="+51" />
            </div>
            <div className="col-sm-7 col-xs-7">
              <input type="number" id="telefono" placeholder="999999999" maxLength='9' minLength='9' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 text-center">
            <p>We'll send you a text to verify your phone</p>
          </div>
        </div>
        <div className="ocultar alert alert-warning text-center">
          Your PIN number is: <span id="cod-lab"></span>
        </div>
      </section>

      <section className="next">
        <button className="btn-lg disabled" id="boton_telefono">Next</button>
      </section>
    </div>
  );
}

export default App;
