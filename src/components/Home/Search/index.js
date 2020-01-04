import React from 'react';
import IconSearch from './img/IconSearch1.png';
import { CustomInput } from 'reactstrap';

import { TopMain, TopControl, FormTop } from './style';

const index = () => {
  return (
    <TopMain>
      <FormTop action="/">
        <button type="summit">
          <img src={IconSearch} />
        </button>
        <input type="text" placeholder="Search now..." />
      </FormTop>
      <TopControl>
        <CustomInput
          type="switch"
          id="exampleCustomSwitch"
          name="customSwitch"
          label="Light"
        />
        <p>Kudo Tran</p>
        <i className="fa fa-cog"></i>
      </TopControl>
    </TopMain>
  );
};

export default index;
