import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import LogoImg from './img/logo.png';
import Untitled from './Untitled';

import { Logo, Sidebar, Category, ListItem, ListMenu } from './style';

const Example = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Sidebar>
              <Logo>
                <div>
                  <img src={LogoImg}></img>
                </div>
                <p>ORBITA</p>
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
