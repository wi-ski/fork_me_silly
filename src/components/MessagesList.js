import React, { PropTypes } from 'react'
import Message from './Message'

const MessagesList = ({ messages }) => (
// const MessagesList = ({ messages, onMessageClick }) => (
  <ul>
    {messages.map( (_message,idx) =>(
        <Message key={_message.id} id={idx}text={_message.text} onClick={ () => onMessageClick(_message.id) } />
      )
    )}
  </ul>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
  // onMessageClick: PropTypes.func.isRequired
}

export default MessagesList
