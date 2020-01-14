import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import * as Color from '../../Modules/Color';

export const Sidebar = styled.div`
  width: calc((100% * 9) / 50);
  background: ${props => props.theme.background_search};

  @media only screen and (max-width: 1380px) {
    width: 25%;
  }

  @media only screen and (max-width: 1000px) {
    width: 30%;
  }

  @media only screen and (max-width: 850px) {
    display: ${props => (props.toggle ? 'none' : 'block')};
    position: absolute;
    z-index: 5;
    top: 0px;
    bottom: 0px;
    width: 343px;
    box-shadow: 0 0 5px ${Color.gray_01};
  }
`;

export const ButtonToggle = styled(Button)`
  display: none;
  position: fixed;
  z-index: 11;
  top: 82px;
  width: 50px;
  height: 50px;
  @media only screen and (max-width: 850px) {
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
  @media only screen and (min-width: 850px) {
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
    font-size: 18px;
    font-weight: bold;
    color: ${Color.white};
  }

  i {
    display: none;
    padding: 12px 0px 10px 50px;
    font-size: 25px;
    color: ${Color.white};

    @media only screen and (max-width: 850px) {
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
    color: #bcbfc4;
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
`;

export const Title = styled.p``;

export const NameProject = styled.p`
  text-align: center;
  margin-bottom: 0px;
  padding: 12px 16px;
  font-size: 18px;
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
