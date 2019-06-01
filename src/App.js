import React from 'react';
import ModalTemplate from './modal';
import './App.css';
import Incidents from './components/Incidents';
import MenuNav from './menu-app'
import StorageFirebase from './components/StorageFirebase';

class App extends React.Component {
  
  render() {
    return (
      <> 
      <Incidents />
      <ModalTemplate/>
      <MenuNav/> 
    </>
    );
  } 
}

export default App;
