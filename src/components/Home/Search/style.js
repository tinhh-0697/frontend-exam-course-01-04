import styled from 'styled-components';
import { Button } from 'reactstrap';

export const TopControl = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  p {
    padding: 0px 8px;
    margin-bottom: 0px;
    color: #5a5a5a;
    font-size: 21px;
  }

  i {
    padding: 0px 8px;
    color: #d5d8db;
    font-size: 32px;
  }
`;

export const TopMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: 82px;
  background: ${props => props.theme.background_search};
  /* background: #fafbfc; */
  box-shadow: 0 0 54px rgba(0, 0, 0, 0.09);
`;
export const FormTop = styled.form`
  padding: 17px 20px 16px 27px;

  button {
    padding-right: 20px;
    background: transparent;
    border: 0;
    font-weight: 100;
  }

  input {
    padding-top: 11px;
    background: ${props => props.theme.background_search};
    /* background: #fafbfc; */
    font-size: 18px;
    border: none;
    color: #b2b2b2;

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
      color: #b5b5b5;
    }
  }
`;

export const Profile = styled.div`
  display: none;
  padding: 50px 20px 20px 20px;
  position: absolute;
  right: 5px;
  border-radius: 10px;
  background: #f5f6fe;
  text-align: center;
  width: 200px;
  box-shadow: 3px 3px 5px 1px #666;

  .role-title {
    margin-bottom: 10px;
    padding: 10px;
    color: #f9be58;
    font-size: 15px;
    border-bottom: 2px solid #959595;
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
  color: #ffffff;
  background-color: #6ad36e;
  font-size: 17px;
  border: transparent;
`;

export const SettingButton = styled(Button)`
  margin: 10px;
  height: 37px;
  width: 83px;
  color: #ffffff;
  background-color: #fb5867;
  font-size: 17px;
  border: transparent;
`;
