import React, { PropTypes } from 'react'

const MessageInput = ({ onKeyUp }) => (
  <label>
    <input type="text" onKeyUp={onKeyUp} defaultValue="Hit me" />
  </label>
)

MessageInput.propTypes = {
  onKeyUp: PropTypes.func.isRequired
}

export default MessageInput
