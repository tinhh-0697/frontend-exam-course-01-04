import styled from 'styled-components';
import { device } from '../../Modules/Responsive';

export const Main = styled.div`
  width: calc((100% * 41) / 50);
  background: ${props => props.theme.background_main};

  @media ${device.laptopL} {
    width: 75%;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;
