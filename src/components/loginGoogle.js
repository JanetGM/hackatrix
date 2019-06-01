import React, { Component } from 'react';
import styled from 'styled-components';
import {firebaseAuth} from '../firebase';


class LoginGoogle extends Component  {

 constructor(props) {
   super(props);
   this.state = {
     users: {
       nombre: '',
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
  firebaseAuth().signInWithPopup(provider)
  .then((result) => {
  console.log(result)
  }).catch((error) => { 
  });
  const user = firebaseAuth().currentUser;
  const name = user.displayName;
  const photoUser = user.photoURL;
  this.setState({ user: {
    nombre: name,
    photoUrl: photoUser,
  }
  })
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
            <LoginButton type="button" className="btn App-button" onClick={this.signIn}>
              <i className="fab fa-google-plus-g"></i> Iniciar sesión con google</LoginButton>
          </div>
          <p>{console.log(this.state.users)}</p>
          </>
        );      
    }
}
export default LoginGoogle;
    
   
  
  