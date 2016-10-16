import React, { PropTypes } from 'react'
import style from './style.scss'

const MessageInput = ({ onKeyUp }) => (
  <label>
    <input type="text" onKeyUp={onKeyUp} defaultValue="Hit me" className={style.messageInputStyles} />
  </label>
)

MessageInput.propTypes = {
}

export default MessageInput;
