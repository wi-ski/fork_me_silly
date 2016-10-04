import React from 'react';
import style from './style.scss'



const itemStyle = (menuItem) => {
    return {
        // height:(menuItem.toggled ? '200px' : '100px')
        // height:(menuItem.toggled ? '200px' : '100px')
    }
}

const SettingsMenuItem = ({menuItem,onClick,idx}) => {
    return (
        <li style={itemStyle(menuItem)} className={style.menuItem} onClick={() => ( onClick(idx) )} >
            <a href="#">
                Im a menu item
            </a>
        </li>
    )
}

export default SettingsMenuItem;
