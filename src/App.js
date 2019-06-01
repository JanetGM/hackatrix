import React from 'react';
import './App.css';
import Incidents from './components/Incidents';
import StorageFirebase from './components/StorageFirebase';

function App() {
  return (
    <>  
      <StorageFirebase />
      <Incidents />

    </>
  );
}

export default App;
