import React, { useState, useEffect } from 'react';
import IconSearch from './img/IconSearch1.png';
import ImgProfile from './img/profileimg.jpg';
import { connect } from 'react-redux';
import { SwitchSetThyme } from '../../../Store/SetThyme/action';
import { LogoutFirebase, SignupFirebase } from '../../../Store/Login/action';
import SunImg from './img/sun.png';
import MoonImg from './img/moon.png';
import {
  TopMain,
  TopControl,
  FormTop,
  SetingTop,
  Profile,
  LogoutButton,
  SettingButton,
  IconSun,
  IconMoon,
  UserNameText,
  TopControlRight,
  TopControlLeft,
  AnimationIcon,
  ThymeSwitch
} from './style';

const Search = props => {
  const [username, SetUserName] = useState();
  const { Logout } = props;
  useEffect(() => {
    const object = JSON.parse(localStorage.getItem('user'));
    SetUserName(object.UserName);
  }, [Logout]);

  const LogoutClick = () => {
    props.Logout();
  };
  const Signup = () => {
    props.Signup();
  };

  const actionThyme = () => {
    props.SetThyme();
  };
  return (
    <TopMain>
      <FormTop action="/">
        <button type="summit">
          <img src={IconSearch} alt="img" />
        </button>
        <input type="text" placeholder="Search now..." />
      </FormTop>
      {console.log(JSON.parse(localStorage.getItem('user')))}
      <TopControl>
        <TopControlLeft>
          <AnimationIcon>
            <IconSun src={SunImg}></IconSun>
            <IconMoon src={MoonImg}></IconMoon>
          </AnimationIcon>
          <ThymeSwitch
            type="switch"
            id="exampleCustomSwitch"
            name="customSwitch"
            onChange={actionThyme}
          ></ThymeSwitch>
        </TopControlLeft>
        <TopControlRight>
          <UserNameText>{username}</UserNameText>
          <SetingTop>
            <i className="fa fa-cog"></i>
            <Profile>
              <img
                alt="null"
                className="rounded-circle "
                src={ImgProfile}
              ></img>
              <p>{username}</p>
              <p className="role-title">ADMIN</p>
              <LogoutButton onClick={LogoutClick}>Logout</LogoutButton>
              <SettingButton onClick={Signup}>Setting</SettingButton>
            </Profile>
          </SetingTop>
        </TopControlRight>
      </TopControl>
    </TopMain>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    SetThyme: () => {
      dispatch(SwitchSetThyme());
    },
    Logout: () => {
      dispatch(LogoutFirebase());
    },
    Signup: () => {
      dispatch(SignupFirebase());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
