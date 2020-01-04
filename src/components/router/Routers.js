import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Home/Sidebar/index';
import Main from '../Home/Main';

const StyleWidth = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
  display: flex;
  position: relative;
  font-family: 'Rubik', sans-serif;
`;

const Routers = () => {
  return (
    <StyleWidth>
      <Router>
        <Sidebar></Sidebar>
        <Main></Main>
      </Router>
    </StyleWidth>
  );
};

export default Routers;
