import React from 'react';
import ModalTemplate from './modal';
import './App.css';
import Incidents from './components/Incidents';
import StorageFirebase from './components/StorageFirebase';

class App extends React.Component {
  
    render() {
      return (
        <> 
        <StorageFirebase />
        <Incidents />
        <ModalTemplate></ModalTemplate> 
      </>
    );
  }
}

export default App;
