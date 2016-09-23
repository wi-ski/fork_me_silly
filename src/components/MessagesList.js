import React, { PropTypes } from 'react'
import Message from './Message'

const MessagesList = ({ messages }) => (
// const MessagesList = ({ messages, onMessageClick }) => (
  <ul>
    {messages.map( (_message,idx) =>(
        <Message key={idx} text={_message.text} />
      )
    )}
  </ul>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
  // onMessageClick: PropTypes.func.isRequired
}

export default MessagesList
