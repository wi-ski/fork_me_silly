import React, { PropTypes } from 'react'
import style from './style.scss'

const MessageInput = ({ onKeyUp, settingsStyles }) => {
    return (
      <label>
        <input type="text" onKeyUp={onKeyUp} defaultValue="Hit me" className={style.messageInputStyles} style={settingsStyles['input']} />
      </label>
    )
}

MessageInput.propTypes = {
}

export default MessageInput;
