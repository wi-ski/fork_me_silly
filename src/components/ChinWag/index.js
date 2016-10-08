import React from 'react';
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'


const ChinWag = ({ onKeyUp, messages, style}) => {
    return (
        <div id='chinwag' style={style} >
            <MessagesList messages={messages} />
            <MessageInput onKeyUp={onKeyUp} />
        </div>
    )
}


export default ChinWag;

