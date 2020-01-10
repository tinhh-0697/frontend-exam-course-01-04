import React from 'react';
import IconSearch from './img/IconSearch1.png';
import ImgProfile from './img/profileimg.jpg';
import { CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { SwitchSetThyme } from '../../../Store/SetThyme/action';
import { LogoutFirebase } from '../../../Store/Login/action';
import {
  TopMain,
  TopControl,
  FormTop,
  SetingTop,
  Profile,
  LogoutButton,
  SettingButton
} from './style';

const Search = props => {
  const Logout = () => {
    props.Logout();
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
      <TopControl>
        <CustomInput
          type="switch"
          id="exampleCustomSwitch"
          name="customSwitch"
          onChange={actionThyme}
        />
        <p>Kudo Tran</p>
        <SetingTop>
          <i className="fa fa-cog"></i>
          <Profile>
            <img className="rounded-circle " src={ImgProfile}></img>
            <p>--Hello--</p>
            <p className="role-title">ADMIN</p>
            <LogoutButton onClick={Logout}>Logout</LogoutButton>
            <SettingButton>Setting</SettingButton>
          </Profile>
        </SetingTop>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
