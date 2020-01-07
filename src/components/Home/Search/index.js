import React from 'react';
import IconSearch from './img/IconSearch1.png';
import { CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { SwitchSetThyme } from '../../../Store/SetThyme/action';
import { LogoutFirebase } from '../../../Store/Login/action';
import { TopMain, TopControl, FormTop } from './style';

const Search = props => {
  const Logout = () => {
    // firebaseApp
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     localStorage.removeItem('user');
    //     console.log('loguted');
    //   })
    //   .catch(error => {
    //     console.log('errologout');
    //   });
    props.Logout();
  };

  // const po = () => {
  //   firebaseApp.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.log(user);
  //     } else {
  //       console.log('no');
  //     }
  //   });
  // firebaseApp
  //   .auth()
  //   .createUserWithEmailAndPassword('tran.quan.lam1@gmail.com', '123456')
  //   .then(function(result) {
  //     return result.user.updateProfile({
  //       displayName: 'tranquanlam'
  //     });
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });

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
        <i className="fa fa-cog" onClick={Logout}></i>
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
