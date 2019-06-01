import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const myIcon = L.icon({
  iconUrl:
    'https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-2/16/2105-512.png',
  iconSize: [30, 30],
  iconAnchor: [30, 30],
  popupAnchor: [0, -50]
});

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [[-12.04318, -77.02824]]
    };
  }

  centerLeafletMapOnMarker(map, marker) {
    const latLngs = [marker.getLatLng()];
    const markerBounds = L.latLngBounds(latLngs);
    this.map.fitBounds(markerBounds);
  }

  componentDidMount() {
    this.map = L.map('map', {
      center: [-12.046374, -77.042793],
      zoom: 10,
      zoomControl: false
    });

    L.tileLayer(
      'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      {
        detectRetina: true,
        maxZoom: 20,
        minZoom: 3,
        maxNativeZoom: 17
      }
    ).addTo(this.map);

    const marker = L.marker([-12.141667, -77.016667], { icon: myIcon }).addTo(
      this.map
    );
    marker.bindPopup('Alerta de Robo').openPopup();
  }

  render() {
    return <Wrapper width="1200px" height="720px" id="map" />;
  }
}