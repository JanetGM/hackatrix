import React from 'react';
import  LoginGoogle  from './components/loginGoogle';
import styled from 'styled-components';


 const App = () => {

    const AppContainer = styled.div`
      justify-content: center;
      margin-top: 70%;
    `;

    return (
      <AppContainer>
        <LoginGoogle />
      </AppContainer>
    );
}

export default App;
