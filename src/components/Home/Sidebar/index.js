import React, { useState } from 'react';
import LogoImg from './img/logo.png';
import Notification from '../../Modules/Notification';

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
            <img src={LogoImg} alt=""></img>
          </div>
          <p>ORBITA</p>
          <i onClick={() => closeSidebar()} class="fa fa-times-circle-o"></i>
        </Logo>
        <Category>
          <p>CATEGORY 1</p>
          <ListMenu>
            <li>
              <ListItem to="/chart">
                <div>
                  <i className="fa fa-tachometer"></i>
                  <span>Dashboard</span>
                </div>
                <Notification Number="2"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <div>
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart" activeClassName="active">
                <div>
                  <i className="fa fa-puzzle-piece"></i>
                  <span>Widgets</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table" activeClassName="active">
                <div>
                  <i className="fa fa-th"></i>
                  <span>Elements</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table" activeClassName="active">
                <div>
                  <i className="fa fa-file-text"></i>
                  <span>Forms</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart" activeClassName="active">
                <div>
                  <i className="fa fa-pie-chart"></i>
                  <span>Charts</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
          </ListMenu>
        </Category>
        <Category>
          <p>CATEGORY 2</p>
          <ListMenu>
            <li>
              <ListItem to="/table">
                <div>
                  <i className="fa fa-tachometer"></i>
                  <span>Dashboard</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table">
                <div>
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart" activeClassName="active">
                <div>
                  <i className="fa fa-puzzle-piece"></i>
                  <span>Widgets</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table" activeClassName="active">
                <div>
                  <i className="fa fa-th"></i>
                  <span>Elements</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table" activeClassName="active">
                <div>
                  <i className="fa fa-file-text"></i>
                  <span>Forms</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart" activeClassName="active">
                <div>
                  <i className="fa fa-pie-chart"></i>
                  <span>Charts</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
          </ListMenu>
        </Category>
      </Sidebar>
    </>
  );
};

export default Sidebars;
