import React from 'react';
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'
import CSSModules from 'react-css-modules';
import style from './style.scss'

const translateStyles = (styleObj) => {
    var resp = {};
    Object.keys(styleObj).forEach(function(_key){
        resp[_key] = {
            [styleObj[_key].valueKey]:styleObj[_key].value
        }
    });
    return resp;
}

const ChinWag = ({ onKeyUp, messages, styles }) => {
    var _style = translateStyles(styles)
    return (
        <div id='chinwag' style={_style.container} className={style.chatContainerStyles}>
            <MessagesList messages={messages} style={_style.messages} />
            <MessageInput  onKeyUp={onKeyUp} style={_style.input} />
        </div>
    )
}
export default CSSModules(ChinWag, style);

