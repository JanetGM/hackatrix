import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import {firebaseAuth} from '../firebase';
import ChooseDistric from '../components/ChooseDistric';
import { Link } from 'react-router-dom'



class LoginGoogle extends Component  {

 constructor(props) {
   super(props);
   this.state = {
     users: {
       nombre: null,
       photoUrl: '',
       distrito: '',
       reporte:[{
         photo: '',
         comentario: '',
         tipoDeIncidencia: '',
         incidenteEspecifico: '',
         coordenadas: '',
         fecha: '',
       }]
     }
   }
this.signIn = this.signIn.bind(this)
 }

 signIn(){
  const provider = new firebaseAuth.GoogleAuthProvider();
  firebaseAuth().signInWithRedirect(provider)
  .then((result) => {
    }).catch((error) => { 
  });
  const user = firebaseAuth().currentUser;
  if (user){
    const name = user.displayName;
    const photoUser = user.photoURL;
    this.setState({ users: {
      nombre: name,
      photoUrl: photoUser,
    }
    })
  }else{
    console.log('no está logeado')
  }
  
}

    render() {
      const LoginButton = styled.button`
      background-color: white;
      padding: 5px;
      margin: auto;
      display: block;
      color: red;
      border-radius: 5px;
      border: 1px solid red;
    `;
        return (
          <>
          <div className="LoginGoogle">
            <Link to="/ChooseDistrict" ><LoginButton type="button" className="btn App-button" onClick={this.signIn}>
              <i className="fab fa-google-plus-g"></i> Iniciar sesión con google</LoginButton>></Link>
          </div>
          </>
        );      
    }
}
export default LoginGoogle;
    
   
  
  