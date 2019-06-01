import React from 'react';
import LoginGoogle  from '../components/loginGoogle';
import LoginFacebook from '../components/loginFacebook';
import styled from 'styled-components';


 const Home = () => {

    const AppContainer = styled.div`
      justify-content: center;
      margin-top: 70%;
    `;

    return (
      <AppContainer>
        <LoginGoogle />
        <LoginFacebook />
      </AppContainer>
    );
}
export default Home ;