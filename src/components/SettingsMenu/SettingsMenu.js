import React from 'react';
import SettingsMenuItem from '../SettingsMenuItem';

const SettingsMenu = ({ menuItems, activeId,onSettingsComponentClick }) => (
    <ul>
        {
            menuItems.map((menuItem,idx)=>{
                return (
                    <SettingsMenuItem toggled={menuItem.toggled} key={idx} idx={idx} onClick={() => onSettingsComponentClick(idx)} />
                )
            })
        }
    </ul>
)

export default SettingsMenu;
