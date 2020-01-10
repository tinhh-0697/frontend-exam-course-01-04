import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

export const Sidebar = styled.div`
  width: calc((100% * 9) / 50);
  background: ${props => props.theme.background_search};
  transition: all 0.4s;

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
    box-shadow: 0 0 5px #383232;
  }
`;

export const ButtonToggle = styled(Button)`
  display: none;
  position: fixed;
  top: 82px;
  width: 50px;
  height: 50px;
  @media only screen and (max-width: 850px) {
    display: block;
  }
`;

export const Logo = styled.div`
  display: flex;
  padding: 10px 34px;
  height: 82px;
  background: #38c6da;

  p {
    text-align: center;
    margin-bottom: 0px;
    padding: 16px 16px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  i {
    display: none;
    padding: 12px 0px 10px 50px;
    font-size: 25px;
    color: #ffffff;

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
  color: #757d89;
  transition: all 0.6;

  :hover {
    text-decoration: none;
    color: #38c6da;
    ::before {
      content: '';
      position: absolute;
      top: 13px;
      left: 0;
      bottom: 5px;
      height: 44px;
      width: 5px;
      background: #38c6da;
    }
  }

  &.active {
    text-decoration: none;
    color: #38c6da;

    ::before {
      content: '';
      position: absolute;
      top: 13px;
      left: 0;
      bottom: 5px;
      height: 44px;
      width: 5px;
      background: #38c6da;
    }
  }
`;

export const Title = styled.p``;

export const NameProject = styled.p`
  text-align: center;
  margin-bottom: 0px;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: bold;
  color: white;
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
