import React from 'react';
import style from './style.scss'

const SocialMediaIcon = ({ value }) => {
    return (
        <a>
            <i className={"fa fa-" + value}>
            </i>
        </a>
    )
}
const SocialMediaIcons = ({ styleStates, Icons }) => {
    debugger
    return (
        <div>
            {
                Icons.map((conf)=>{
                    return (
                        <SocialMediaIcon {...conf.attrs} />
                    )
                })
            }
        </div>
    )
}


// export default SettingsMenu;
export default SocialMediaIcons;
