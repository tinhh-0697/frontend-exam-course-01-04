import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import * as Color from '../../Modules/Color';
import { device } from '../../Modules/Responsive';
import * as Font from '../../Modules/Font';

export const Sidebar = styled.div`
  width: calc((100% * 9) / 50);
  background: ${props => props.theme.background_search};

  @media ${device.laptopL} {
    width: 25%;
  }

  @media ${device.laptop} {
    width: 30%;
  }

  @media ${device.tablet} {
    width: ${props => (props.toggle ? '0px' : '300px')};
    /* display: ${props => (props.toggle ? 'none' : 'block')}; */
    position: absolute;
    z-index: 15;
    top: 0px;
    bottom: 0px;
    /* right: -17px; */
    /* width: 300px; */
    box-shadow: 0 0 5px ${Color.gray_01};
    transition: all 0.4s;
    overflow:auto;
   
  }
`;

export const ButtonToggle = styled(Button)`
  display: none;
  position: fixed;
  z-index: 11;
  top: 82px;
  width: 50px;
  height: 50px;
  @media ${device.tablet} {
    display: block;
  }
`;

export const ToggleSearch = styled(ButtonToggle)`
  top: 133px;
  @media only screen and (max-width: 850px) {
    display: block;
  }
`;
export const InputSearch = styled(Input)`
  padding: ${props => (props.togglesearch === 'true' ? '5px' : '0px')};
  position: fixed;
  z-index: 11;
  top: 133px;
  left: 50px;
  width: ${props => (props.togglesearch === 'true' ? '200px' : '0px')};
  height: 50px;
  transition: all 0.6s;
  @media ${device.tablet_mobile_first} {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  padding: 10px 34px;
  height: 82px;
  background: ${Color.turquoise};

  p {
    text-align: center;
    margin-bottom: 0px;
    padding: 16px 16px;
    font-size: ${Font.font_size_01};
    font-weight: bold;
    color: ${Color.white};
  }

  i {
    display: none;
    padding: 17px 0px 10px 50px;
    font-size: ${Font.font_size_02};
    color: ${Color.white};

    @media ${device.tablet} {
      display: block;
    }
  }
  img {
    padding: 3px 0px 5px 0px;
  }
`;

export const Category = styled.div`
  padding-top: 30px;
  background: ${props => props.theme.background_search};

  p {
    font-size: 16px;
    color: ${Color.gray};
    padding: 12px 12px 12px 34px;
    margin-bottom: 0px;
    border-bottom: 1px solid ${props => props.theme.border_table};
  }
`;

export const ListItem = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 21px 34px;
  color: ${Color.gray_02};
  transition: all 0.6s;

  :hover {
    text-decoration: none;
    color: ${Color.turquoise};
    border-left: 5px solid ${Color.turquoise};
  }

  &.active {
    text-decoration: none;
    color: ${Color.turquoise};
    border-left: 5px solid ${Color.turquoise};
  }

  @media ${device.tablet} {
    font-size: ${Font.font_size_tablet};
  }
`;

export const Title = styled.p``;

export const NameProject = styled.p`
  text-align: center;
  margin-bottom: 0px;
  padding: 12px 16px;
  font-size: ${Font.font_size_01};
  font-weight: bold;
  color: ${Color.white};
`;

export const ListMenu = styled.ul`
  padding-left: 0px;

  i {
    font-size: 21px;
  }

  span {
    padding-left: 25px;
  }
`;
