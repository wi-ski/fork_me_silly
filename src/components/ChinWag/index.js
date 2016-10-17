import React from 'react';
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'
import style from './style.scss'

const ChinWag = ({ onKeyUp, messages, ...others }) => {
    return (
        <div id='chinwag' className={style.chatContainerStyles}>
            <MessagesList messages={messages} {...others} />
            <MessageInput  onKeyUp={onKeyUp} {...others} />
        </div>
    )
}
export default ChinWag;

