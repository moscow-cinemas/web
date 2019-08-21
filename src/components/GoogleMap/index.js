import React from 'react'
import { compose, withProps } from "recompose";
import './style.scss';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap as Map
} from "react-google-maps";

const GoogleMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAVjWy8jnO4ltFoTBZYDQGUQAlG1W87NGE&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map" />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <Map defaultOptions={{
      streetViewControl: false,
      scaleControl: false,
      mapTypeControl: false,
      panControl: false,
      zoomControl: true,
      rotateControl: false,
      fullscreenControl: false
    }} defaultZoom={11} defaultCenter={{ lat: 55.754383, lng: 37.622277 }} {...props}>
      {props.children}
  </Map>
));

export { Marker } from "react-google-maps/lib/components/Marker";
export { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

export { GoogleMap }

