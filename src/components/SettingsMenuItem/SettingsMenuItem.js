import React from 'react';
// import MessageList from '../containers/MessageListContainer'
// import MessageInput from '../containers/MessageInputContainer'
const SettingsMenuItem = ({toggled,onClick,idx}) => {

    return (
        <li className={toggled ? 'toggled' : 'inactive'} onClick={() => ( onClick(idx) )} >
            Im a menu item
        </li>
    )
}

export default SettingsMenuItem;
