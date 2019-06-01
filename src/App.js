import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import ChooseDistric from './components/ChooseDistric';
import menu from './components/menu';
import Home from './components/Home';




class app extends React.Component{

  constructor(){
    super();
    this.state = {
      district:[]
    }
  }
  componentDidMount() {
    axios.get(` https://raw.githubusercontent.com/JanetGM/hackatrix/vista2-navbar/src/components/Database/district.json
    `)
      .then(res => {
        const district = res.data;
        this.setState({ district });
      })
  }

 
  render(){
    const {district} = this.state
    return(
      <>
      <Layout>
       <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ChooseDistrict" component={ChooseDistric} />
       </Switch>
      </Layout>
      <ChooseDistric district={district}/>
      </>
    )
  } 
  
}

export default app;
