import React from 'react';
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'
import style from './style.scss'

const ChinWag = ({ onKeyUp, messages}) => {
    return (
        <div id='chinwag' className={style.chatContainerStyles}>
            <MessagesList messages={messages} />
            <MessageInput  onKeyUp={onKeyUp} />
        </div>
    )
}
export default ChinWag;

