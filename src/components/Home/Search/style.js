import styled from 'styled-components';

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
