import React, { PropTypes } from 'react'
import Message from './Message'
import CSSModules from 'react-css-modules';
import styles from './style.scss'

const MessagesList = ({ messages, settingsStyles }) => {
  return (
    <ul className={"nav nav-list " + styles.messageListStyles} style={settingsStyles['messagesList']} >
    {
        messages.map( (_message,idx) => (
          <Message key={idx} text={_message.text} settingsStyles={settingsStyles} />
        ))
    }
    </ul>
  )
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}
export default MessagesList;

