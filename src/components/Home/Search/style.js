import styled from 'styled-components';
import { Button, CustomInput } from 'reactstrap';
import * as Color from '../../Modules/Color';
import { device } from '../../Modules/Responsive';

export const TopControl = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  i {
    padding: 0px 8px;
    color: ${Color.gray_04};
    font-size: 32px;
  }
`;

export const TopControlRight = styled.div`
  display: flex;
`;

export const UserNameText = styled.p`
  padding: 0px 8px;
  margin-bottom: 0px;
  color: ${Color.gray_03};
  font-size: 21px;
  @media ${device.tablet} {
    display: none;
  }
`;

export const TopControlLeft = styled.div`
  text-align: center;
  padding: 29px;
`;

export const ThymeSwitch = styled(CustomInput)`
  top: 25px;
  z-index: 12;
`;

export const AnimationIcon = styled.div`
  position: absolute;
  top: 0px;
  z-index: 3;
  width: 100px;
  font-size: 100px;
  line-height: 1;
  transform: ${props =>
    props.theme.sun ? 'translate(0, 0)' : 'translate(100px, 200px)'};
  transition: all 1s;
`;

export const IconSun = styled.img`
  @keyframes inner-circle {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(-90deg);
    }
  }

  position: absolute;
  z-index: 2;
  right: 63px;
  width: 50px;
  display: block;
  animation: inner-circle 5s linear infinite;
`;

export const IconMoon = styled.img`
  position: absolute;
  width: 50px;
  right: 100px;
  top: -150px;
  transform: ${props =>
    props.theme.moon ? 'translate(-63px,-48px)' : 'translate(0px, 28px)'};
`;

export const TopMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: 82px;
  background: ${props => props.theme.background_search};
  box-shadow: 3px 1px 7px
    ${props => (props.theme.sun ? Color.gray_05 : Color.black)};
`;
export const FormTop = styled.form`
  padding: 17px 20px 16px 27px;

  @media ${device.tablet} {
    display: none;
  }

  button {
    padding-right: 20px;
    background: transparent;
    border: 0;
    font-weight: 100;
  }

  input {
    padding-top: 11px;
    background: ${props => props.theme.background_search};
    font-size: 18px;
    border: none;
    color: ${Color.gray_08};

    :hover,
    :focus,
    :active {
      outline: 0;
      box-shadow: none;
      text-decoration: none;
    }

    ::placeholder {
      font-size: 18px;
      font-weight: lighter;
      color: ${Color.gray_09};
    }
  }
`;

export const Profile = styled.div`
  display: none;
  width: 200px;
  padding: 50px 20px 20px 20px;
  position: absolute;
  z-index: 13;
  right: 5px;
  border-radius: 10px;
  background: #f5f6fe;
  text-align: center;
  box-shadow: 3px 3px 5px 1px
    ${props => (props.theme.sun ? Color.gray_06 : Color.black)};

  .role-title {
    margin-bottom: 10px;
    padding: 10px;
    color: ${Color.orange};
    font-size: 15px;
    border-bottom: 2px solid
      ${props => (props.theme.sun ? Color.gray_07 : Color.black)};
  }

  img {
    width: 80px;
    position: absolute;
    top: -15px;
    right: 29%;
  }
`;

export const SetingTop = styled.div`
  position: relative;

  &:hover {
    ${Profile} {
      display: block;
    }
  }
`;

export const LogoutButton = styled(Button)`
  margin: 10px;
  height: 37px;
  width: 83px;
  color: ${Color.white};
  background-color: ${Color.green};
  font-size: 17px;
  border: transparent;
`;

export const SettingButton = styled(Button)`
  margin: 10px;
  height: 37px;
  width: 83px;
  color: ${Color.white};
  background-color: ${Color.red};
  font-size: 17px;
  border: transparent;
`;
