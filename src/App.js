import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//https://maps.googleapis.com/maps/api/js?key=AIzaSyCdHQoVJGHGk8lG3ay1a7OXTdgMSE1szfM&libraries=places
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));


class App extends Component {
  render() {
    return (
      <div>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdHQoVJGHGk8lG3ay1a7OXTdgMSE1szfM&libraries=places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

      </div>
    );
  }
}

export default App;
