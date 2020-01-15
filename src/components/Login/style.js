import styled from 'styled-components';

export const LoginPage = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  font-family: 'Rubik', sans-serif;
  background: #38c6da;
`;

export const SummitLogin = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginWrap = styled.div`
  position: absolute;
  left: 40%;
  top: 200px;
  padding: 20px;
  width: 350px;
  height: 400px;
  border-radius: 20px;
  background: #ffffff;

  h3 {
    text-align: center;
    font-weight: bold;
    margin: 30px;
  }
  input {
    margin-bottom: 30px;
    border-radius: 20px;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
  }
  button {
    margin-bottom: 30px;
    border-radius: 20px;
  }

  .custom-control-label,
  .forgot-password {
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
  }

  .form-group input {
    margin-bottom: 0px;
  }
`;

export const ErrorValidate = styled.div`
  padding: 6px 12px;
  font-size: 15px;
  font-style: italic;
  color: red;
`;
