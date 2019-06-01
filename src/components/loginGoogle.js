import React, { Component } from 'react';
import styled from 'styled-components';

class LoginGoogle extends Component  {

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
          <div className="LoginGoogle">
            <LoginButton type="button" className="btn App-button">
              <i className="fab fa-google-plus-g"></i> Iniciar sesión con google</LoginButton>
          </div>
        );      
    }
}
export default LoginGoogle;
    
   
  
  