import React, { PropTypes } from 'react'
import style from './style.scss'


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
  text: PropTypes.string.isRequired
}
export default Message;

