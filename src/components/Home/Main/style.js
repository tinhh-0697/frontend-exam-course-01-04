import styled from 'styled-components';

export const Main = styled.div`
  width: calc((100% * 41) / 50);
  background: ${props => props.theme.background_main};

  @media only screen and (max-width: 1380px) {
    width: 75%;
  }

  @media only screen and (max-width: 1000px) {
    width: 70%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;
