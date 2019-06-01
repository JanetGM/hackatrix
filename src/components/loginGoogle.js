import React, { Component } from 'react';
import styled from 'styled-components';
import {firebaseAuth} from '../firebase';


class LoginGoogle extends Component  {

 constructor(props) {
   super(props);
   this.state = {
     users: {
       nombre: '',
       email: '',
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
 }

currentUser() {
  const userData = firebaseAuth().currentUser;
  console.log(userData)
//   if(userData ==! null){

//    console.log('entro')
//   }else{
// console.log('no hay usuario');
//   }

 

} 

 signIn(){
  const provider = new firebaseAuth.GoogleAuthProvider();
  firebaseAuth().signInWithPopup(provider)
  .then((result) => {
    this.currentUser()

  }).catch((error) => { 
  });
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
          </>
        );      
    }
}
export default LoginGoogle;
    
   
  
  