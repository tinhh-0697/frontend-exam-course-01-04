import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from '../Home/Sidebar/index';
import { connect } from 'react-redux';
import Main from '../Home/Main';
import Login from '../Login';
import { checkStatusLogin } from '../../Store/Login/action';
import firebaseApp from '../../Store/Api/Configfirebase';

const StyleWidth = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
  display: flex;
  position: relative;
  height: 100%;
  font-family: 'Rubik', sans-serif;
`;

const Routers = props => {
  const [statusLogin, SetStatusLogin] = useState(() => {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        SetStatusLogin(true);
      } else {
        SetStatusLogin(false);
      }
    });
  });

  return (
    <>
      {statusLogin === true && (
        <ThemeProvider theme={props.thyme.thymes}>
          <StyleWidth>
            <Router>
              <Sidebar></Sidebar>
              <Main></Main>
            </Router>
          </StyleWidth>
        </ThemeProvider>
      )}
      {!statusLogin && <Login></Login>}
    </>
  );
};
const mapStateToProps = state => {
  return {
    thyme: state.SetThyme,
    login: state.LoginReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkLogin: () => {
      dispatch(checkStatusLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
