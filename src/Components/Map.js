import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import Layout from './Layout/index';

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
      myLocation: {},
      markers: [[-12.04318, -77.02824]]

    };
  }

  centerLeafletMapOnMarker(map, marker) {
    const latLngs = [marker.getLatLng()];
    const markerBounds = L.latLngBounds(latLngs);
    this.map.fitBounds(markerBounds);
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
      alert('No se puede hacer la geolocalización en este buscador.');
    }

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
    
    const marker = L.marker([-8.141791433688246, -79.03257928890527], { icon: myIcon }).addTo(
      this.map
    );
    marker.bindPopup('Alerta de Robo').openPopup();

    this.map.on('click', function(e) {
      console.log(Object.values(e.latlng))
     
    });
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
