import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;
export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [[-12, -77]]
    };
  }

  componentDidMount() {
    this.map = L.map('map', {
      center: [-12.04318, -77.02824],
      zoom: 10,
      zoomControl: true
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
  }

  render() {
    return <Wrapper width="1200px" height="720px" id="map" />;
  }
}
