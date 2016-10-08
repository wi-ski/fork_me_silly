import React, { PropTypes } from 'react'

const MessageInput = ({ onKeyUp, style}) => (
  <label>
    <input type="text" onKeyUp={onKeyUp} defaultValue="Hit me" style={style} />
  </label>
)

MessageInput.propTypes = {
  onKeyUp: PropTypes.func.isRequired
}

export default MessageInput
