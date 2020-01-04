import React, { useState } from 'react';
import LogoImg from './img/logo.png';

import {
  Logo,
  Sidebar,
  Category,
  ListItem,
  ListMenu,
  ButtonToggle
} from './style';

const Sidebars = props => {
  const [toggle, setToggle] = useState(true);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  const closeSidebar = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <ButtonToggle onClick={() => toggleSidebar()}>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </ButtonToggle>
      <Sidebar toggle={toggle}>
        <Logo>
          <div>
            <img src={LogoImg}></img>
          </div>
          <p>ORBITA</p>
          <i onClick={() => closeSidebar()} class="fa fa-times-circle-o"></i>
        </Logo>
        <Category>
          <p>CATEGORY 1</p>
          <ListMenu>
            <li>
              <ListItem to="/chart">
                <i className="fa fa-tachometer"></i>
                <span>Dashboard</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <i className="fa fa-home"></i>
                <span>Home</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table" activeClassName="active">
                <i className="fa fa-puzzle-piece"></i>
                <span>Widgets</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table" activeClassName="active">
                <i className="fa fa-th"></i>
                <span>Elements</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table" activeClassName="active">
                <i className="fa fa-file-text"></i>
                <span>Forms</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart" activeClassName="active">
                <i className="fa fa-pie-chart"></i>
                <span>Charts</span>
              </ListItem>
            </li>
          </ListMenu>
        </Category>
        <Category>
          <p>CATEGORY 2</p>
          <ListMenu>
            <li>
              <ListItem to="/table">
                <i className="fa fa-tachometer"></i>
                <span>Dashboard</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <i className="fa fa-home"></i>
                <span>Home</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <i className="fa fa-puzzle-piece"></i>
                <span>Widgets</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <i className="fa fa-th"></i>
                <span>Elements</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <i className="fa fa-file-text"></i>
                <span>Forms</span>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <i className="fa fa-pie-chart"></i>
                <span>Charts</span>
              </ListItem>
            </li>
          </ListMenu>
        </Category>
      </Sidebar>
    </>
  );
};

export default Sidebars;
