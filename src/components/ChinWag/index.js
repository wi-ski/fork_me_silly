import React from 'react';
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'


const ChinWag = ({ onKeyUp, messages }) => {
    return (
        <div className="col-md-4">
            <MessagesList messages={messages} />
            <MessageInput onKeyUp={onKeyUp} />
        </div>
    )
}


export default ChinWag;

