import React from 'react';
import { GroupLoading } from './style';

const Loading = props => {
  return (
    <GroupLoading className="container">
      <div className="ring">
        Loading
        <span className="load-span" />
      </div>
    </GroupLoading>
  );
};

export default Loading;
