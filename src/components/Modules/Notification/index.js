import React from 'react';
import { NotificationWrap } from './style';
const Notification = props => {
  if (props.Number === '0') {
    return <div></div>;
  } else {
    return <NotificationWrap>{props.Number}</NotificationWrap>;
  }
};

export default Notification;
