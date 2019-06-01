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
      markers: [[-12, -77]],
      myLocation: {}
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          myLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      });
    } else {
      alert('Geolocation API is not supported in your browser. :(');
    }

    this.map = L.map('map', {
      center: [-12.1355039, -77.03],
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

  componentDidUpdate() {
    const myLocation = L.icon({
      iconUrl:
        'http://photos1.blogger.com/blogger/4638/615/200/punto%20azul.png',

      iconSize: [25, 25],
      iconAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });

    const marker = L.marker(
      [this.state.myLocation.latitude, this.state.myLocation.longitude],
      { icon: myLocation }
    ).addTo(this.map);
    marker.bindPopup('<b>Estás aquí</b>').openPopup();
  }

  render() {
    return <Wrapper width="1200px" height="720px" id="map" />;
  }
}
