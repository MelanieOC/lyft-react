import React, { Component } from 'react';
import logo from './img/logo-pink.png';
import usuario from './img/usuario.png';
import './App.css';
import './map.css';
import Utils from './Utils.js';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';
//https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4&libraries=places
//AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer
} from "react-google-maps";

const MyMapComponent = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    center={props.center}
  >
    {props.center &&
      <Marker position={props.center}>
        <InfoWindow><div>Estas aquí</div></InfoWindow>
      </Marker>
    }
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

class Ruta extends Component {
  constructor(props) {
    super(props);
    this.inputValue = null;
    this.state = {
      center: { lat: 41.8525800, lng: -87.6514100 },
      bounds: null,
      origen: this.props.origen,
      destino:this.props.destino
    }
  }
  componentDidMount() {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origen,
      destination: this.state.destino,
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }
  render() {
    return (
      <div>
        <MyMapComponent
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ position: 'absolute', height: `100%`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          directions={this.state.directions}
        />
      </div>
    );
  }
}
class LyftMap extends Component {
  constructor(props) {
    super(props);
    this.inputValue = null;
    this.state = {
      center: { lat: 41.8507300, lng: -87.6512600 },
      mostrarRuta: false,
      place: null
    }
  }
  componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((posicion) => {
        const latitud = posicion.coords.latitude;
        const longitud = posicion.coords.longitude;
        this.setState({
          center: { lat: latitud, lng: longitud }
        })
      }, function (error) {
        alert("Tenemos un problema para encontrar tu ubicación");
      });
    }
  }
  
  render() {
    const { model } = this.props;
    const changePlace=()=>{
      this.setState({
        place: model.targetPlace
      })
    }
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
        {this.state.place && <Ruta origen={this.state.center} destino={this.state.place.geometry.location} />}
        {!this.state.place &&
          <MyMapComponent
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ position: 'absolute', height: `100%`, width: '100%' }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={this.state.center}
          />
        }
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
              <ReactGoogleAutocomplete
                onPlaceSelected={(place) => {
                  console.log(place);
                  model.setTarget(place);
                  changePlace();
                  console.log(model.targetPlace.geometry.location);
                }}
                componentRestrictions={{ country: "pe" }}
                id="destino" className="form-control"
              />
              <button type="button" className="btn" id="ruta" onClick={() => this.guardar()}>Set pickup</button>
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