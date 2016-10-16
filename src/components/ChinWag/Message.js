import React, { PropTypes } from 'react'
import style from './style.scss'

const Message = ({ text, onClick }) => (
  <li
    onClick={onClick}
    className={style.messageStyles}
  >
    {text}
  </li>
)

Message.propTypes = {
}
export default Message;

