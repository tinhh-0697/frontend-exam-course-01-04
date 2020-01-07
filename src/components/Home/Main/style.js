import styled from 'styled-components';

export const Main = styled.div`
  width: calc((100% * 41) / 50);
  background: ${props => props.theme.background_main};
  @media only screen and (max-width: 1099px) {
    width: 100%;
  }
`;
