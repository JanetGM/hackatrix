import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ChooseDistric from './components/ChooseDistric';
import Incidents from './components/Incidents';
import Home from './components/Home';

class app extends React.Component{

   render(){
    return(
      <>
      <Layout>
       <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ChooseDistrict" component={ChooseDistric} />
        <Route path="/Incidents" component={Incidents} />
       </Switch>
      </Layout>
      </>
    )
  } 
}
export default app;
