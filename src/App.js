import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ChooseDistric from './components/ChooseDistric';
import menu from './components/menu';
import Home from './components/Home';




const app = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ChooseDistrict" component={ChooseDistric} />
    </Switch>
  </Layout>
);

export default app;
