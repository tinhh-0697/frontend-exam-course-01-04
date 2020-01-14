import React, { useState } from 'react';
import LogoImg from './img/logo.png';
import Notification from '../../Modules/Notification';
import IconSearch from '../Search/img/IconSearch1.png';

import {
  Logo,
  Sidebar,
  Category,
  ListItem,
  ListMenu,
  ButtonToggle,
  ToggleSearch,
  InputSearch
} from './style';

const Sidebars = () => {
  const [toggle, setToggle] = useState(true);
  const [toggleSearch, setToggleSearch] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  const closeSidebar = () => {
    setToggle(!toggle);
  };

  const toggleInputSearch = () => {
    setToggleSearch(!toggleSearch);
  };
  return (
    <>
      <ButtonToggle onClick={() => toggleSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </ButtonToggle>
      <ToggleSearch onClick={() => toggleInputSearch()}>
        <img src={IconSearch} alt="img" />
      </ToggleSearch>
      <InputSearch togglesearch={toggleSearch.toString()}></InputSearch>
      <Sidebar toggle={toggle}>
        <Logo>
          <div>
            <img src={LogoImg} alt=""></img>
          </div>
          <p>ORBITA</p>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times-circle-o"
          ></i>
        </Logo>
        <Category>
          <p>CATEGORY 1</p>
          <ListMenu>
            <li>
              <ListItem to="/table">
                <div>
                  <i className="fa fa-tachometer"></i>
                  <span>Dashboard</span>
                </div>
                <Notification Number="2"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table2">
                <div>
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart1" activeClassName="active">
                <div>
                  <i className="fa fa-puzzle-piece"></i>
                  <span>Widgets</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table3" activeClassName="active">
                <div>
                  <i className="fa fa-th"></i>
                  <span>Elements</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table4" activeClassName="active">
                <div>
                  <i className="fa fa-file-text"></i>
                  <span>Forms</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart5" activeClassName="active">
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
              <ListItem to="/table21">
                <div>
                  <i className="fa fa-tachometer"></i>
                  <span>Dashboard</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table44">
                <div>
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart51" activeClassName="active">
                <div>
                  <i className="fa fa-puzzle-piece"></i>
                  <span>Widgets</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table412" activeClassName="active">
                <div>
                  <i className="fa fa-th"></i>
                  <span>Elements</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/table7" activeClassName="active">
                <div>
                  <i className="fa fa-file-text"></i>
                  <span>Forms</span>
                </div>
                <Notification Number="0"></Notification>
              </ListItem>
            </li>
            <li>
              <ListItem to="/chart2" activeClassName="active">
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
