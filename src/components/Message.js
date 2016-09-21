import React, { PropTypes } from 'react'

const Message = ({ text, id,onClick }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: read ? 'line-through' : 'strong'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
