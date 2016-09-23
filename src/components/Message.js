import React, { PropTypes } from 'react'

const Message = ({ key, text, id, onClick }) => (
  <li
    key={key}
    id={id}
    onClick={onClick}
    style={{textDecoration: read ? 'line-through' : 'strong' }}
  >
    {text}
  </li>
)

Message.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Message
