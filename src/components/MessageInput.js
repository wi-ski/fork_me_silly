import React, { PropTypes } from 'react'

const MessageInput = ({ value="Hit me",keydown }) => (
  return <input type="text" onKeyUp={keydown} />
)

MessageInput.propTypes = {
  keydown: keydown.func.isRequired
}

export default MessageInput
