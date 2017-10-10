import React, { Component } from 'react';
import './App.css';
//https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4&libraries=places
//AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4
import LyftMap from "./Map.js";
import Home from "./Home.js";
import Form from "./form.js";
import SingUp from "./SingUp.js";
class App extends Component {
  render() {
    return (
      <div>
        <Form/>
      </div>

    );
  }
}

export default App;
