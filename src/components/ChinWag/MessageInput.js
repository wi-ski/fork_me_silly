import React, { PropTypes } from 'react'
import style from './style.scss'

const MessageInput = ({ onKeyUp, _style }) => (
  <label>
    <input type="text" onKeyUp={onKeyUp} defaultValue="Hit me" style={_style} className={style.messageInputStyles} />
  </label>
)

MessageInput.propTypes = {
  onKeyUp: PropTypes.func.isRequired
}

export default MessageInput;
