import React, { Component } from 'react';
import logo from './img/logo-pink.png';
import usuario from './img/usuario.png';
import './css/App.css';
import './css/map.css';
import Utils from './js/Utils.js';
//https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4&libraries=places
//AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    center={props.center}
  >
    <Marker
      position={props.center}
    />
  </GoogleMap>
));

class LyftMap extends Component {
  constructor(props){
    super(props);
    this.inputValue=null;
    this.state = {
      center: { lat: -16.3988900, lng: -71.5350000 },
      bounds: null
    }
  }
  guardar(){
    localStorage.setItem('nn',this.inputValue);
    console.log(localStorage);
  }
  render() {
    return (
      <div>
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
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ position: 'absolute', height: `100%`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={this.state.center}
        />
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
              <input type="text" id="destino" className="form-control" onChange={e=>this.inputValue=e.target.value}/>
              <button type="button" className="btn" id="ruta" onClick={()=>this.guardar()}>Set pickup</button>
              <button type="button" className="btn" id="solicitar" data-toggle="modal" data-target="#myModal">Request Lyft</button>
            </div>
          </div>
        </div>
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title text-center">Tu lyft está en camino</h4>
              </div>
              <div className="modal-body">
                <button className="btn" id="otro_viaje">Otro viaje</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default LyftMap;