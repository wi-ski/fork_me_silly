import React from 'react';
import style from './style.scss'

const itemStyle = (menuItem) => {
    return {
        color:(menuItem.toggled ? 'red' : 'green'),
        height:(menuItem.toggled ? 'auto' : '100px')
    }
}

const SettingsMenuItem = ({menuItem,onClick,idx}) => {
    return (
        <li className={style.menuItem} onClick={() => ( onClick(idx) )} >
            <a style={itemStyle(menuItem)} href="#">
                {menuItem.itemTitle}
            </a>
        </li>
    )
}

export default SettingsMenuItem;
