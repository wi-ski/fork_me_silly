import React, { PropTypes } from 'react'


const Message = ({ text, onClick, _style }) => (
  <li
    style={_style}
    onClick={onClick}
    className={style.messageStyles}
  >
    {text}
  </li>
)

Message.propTypes = {
}
export default Message;

