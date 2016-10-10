import React, { PropTypes } from 'react'
import Message from './Message'
import CSSModules from 'react-css-modules';
import style from './style.scss'

  // <ul className="nav nav-list" style={style} styleName='messages-list-styles' >

const MessagesList = ({ messages, _style }) => (
  <ul className={"nav nav-list " + style.messageListStyles} style={_style} >
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
}
export default MessagesList;
// export default CSSModules(MessagesList, style);

