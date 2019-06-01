import React from 'react';
import ModalTemplate from './modal';
import './App.css';
import Incidents from './components/Incidents';

class App extends React.Component {
  
    render() {
      return (
        <> 
        <Incidents />
        <ModalTemplate/> 
      </>
    );
  }
}

export default App;
