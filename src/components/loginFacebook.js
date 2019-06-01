import React, { Component } from 'react';
import styled from 'styled-components';


class LoginFacebook extends Component {

  render() {
    const LoginButton = styled.button`
    background-color: white;
    padding: 5px;
    margin: auto;
    display: block;
    color: blue;
    border-radius: 5px;
    border: 1px solid blue;
  `;

  const Container = styled.div`
    margin-top: 10px
  `;
    return (
      <Container>
        <LoginButton type="button" className="btn">
          <i className="fab fa-facebook-f"></i> Iniciar sesión con facebook</LoginButton>
      </Container>
    );      
  }
}
  
export default LoginFacebook;
  