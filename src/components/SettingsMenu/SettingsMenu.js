import React from 'react';
import SettingsMenuItem from '../SettingsMenuItem';



const itemStyles = () => ({

});

const SettingsMenu = ({ menuItems, activeId,onSettingsComponentClick }) => {
    return (<ul style={itemStyles()} className='sidebar-nav'>
            {
                menuItems.map((menuItem,idx)=>{
                    return (
                        <SettingsMenuItem menuItem={menuItem} key={idx} idx={idx} onClick={() => onSettingsComponentClick(idx)} />
                    )
                })
            }
        </ul>)
}


export default SettingsMenu;
