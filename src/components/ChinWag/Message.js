import React, { PropTypes } from 'react'

const Message = ({ text, onClick }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

Message.propTypes = {
  text: PropTypes.string.isRequired
}

export default Message
