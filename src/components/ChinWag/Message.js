import React, { PropTypes } from 'react'
import style from './style.scss'

const Message = ({ text, onClick, settingsStyles }) => {
  return (<li
      style={settingsStyles.messages}
      onClick={onClick}
      className={style.messageStyles}
    >
      {text}
    </li>)
}

Message.propTypes = {
}
export default Message;

