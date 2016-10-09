const MessagesList = ({ messages, _style }) => (
  <ul className={"nav nav-list " + style.messageListStyles} style={_style} className={style.messageListStyles} >
    {messages.map( (_message,idx) =>(
        <Message key={idx} text={_message.text} />
      )
    )}
  </ul>
)