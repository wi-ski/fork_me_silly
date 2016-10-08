import React from 'react';
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'


const ChinWag = ({ onKeyUp, messages }) => {
    return (
        <div id='chinwag'>
            <MessagesList messages={messages} />
            <MessageInput onKeyUp={onKeyUp} />
        </div>
    )
}


export default ChinWag;

