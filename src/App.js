import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChooseDistric from './components/ChooseDistric';
import Incidents from './components/Incidents';
import Home from './components/Home';
import Map from './components/Map';

class App extends React.Component{

   render(){
    return(
      <>
      
       <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ChooseDistrict" component={ChooseDistric} />
        <Route path="/Incidents" component={Incidents} />
        <Route path="/Map" component={Map}/>
       </Switch>
    
      </>
    )
  } 
}
export default App;
