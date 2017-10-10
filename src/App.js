import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//https://maps.googleapis.com/maps/api/js?key=AIzaSyCdHQoVJGHGk8lG3ay1a7OXTdgMSE1szfM&libraries=places
//AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.center}
  >
    <Marker
      position={props.center}
    />
  </GoogleMap>
));
const MyMapComponent = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      //controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    <Marker
    position={props.center}
  />
  </GoogleMap>
));
class MyFancyComponent extends React.PureComponent {
  state = {
    center: { lat: -16.3988900, lng: -71.5350000 },
    bounds: null
  }

  render() {
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        center={this.state.center}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <MyFancyComponent/>
      </div>
    );
  }
}

export default App;
