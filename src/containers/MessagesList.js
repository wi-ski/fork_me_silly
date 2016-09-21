import React, { PropTypes } from 'react'
import Message from '../components/Message'

const MessagesList = ({ messages, onMessageClick }) => (
  <ul>
    {message.map(message =>
      <Message
       key={message.id} text={message.text} onClick={() => onMessageClick(message.id)}
      />
    )}
  </ul>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default MessagesList
