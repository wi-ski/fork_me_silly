import React from 'react';
import style from './style.scss'



const itemStyle = (menuItem) => {
    return {
        height:(menuItem.toggled ? '200px' : '100px')
    }
}

const SettingsMenuItem = ({menuItem,onClick,idx}) => {
    return (
        <li style={itemStyle(menuItem)} className={style.menuItem} onClick={() => ( onClick(idx) )} >
            Im a menu item
        </li>
    )
}

export default SettingsMenuItem;
