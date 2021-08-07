import React,{useContext} from 'react';

import './Message.css';
import { SocketContext } from '../../../Context';
import ReactEmoji from 'react-emoji';

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;
  const { me} = useContext(SocketContext);
  var res=message.split('*')
  const from =res[1];
  message=res[0];
  console.log(me+"vs"+from);
  var trimmedName = res[2];
  trimmedName=trimmedName.substring(0,trimmedName.indexOf(' '));
  return (
    me==from?(
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{message}</p>
          </div>
        </div>):(
        <div className="messageContainer justifyStart">
        <p className="sentText pr-10">{trimmedName}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{message}</p>
        </div>
      </div>)
         
  );
}

export default Message;