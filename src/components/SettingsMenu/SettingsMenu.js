import React from 'react';
import SettingsMenuItem from '../SettingsMenuItem';
import style from './style.scss'
import CSSModules from 'react-css-modules';

const itemStyles = () => {
    return {}
};

const SettingsMenu = ({ menuItems, activeId,onSettingsComponentClick }) => {
    return (
        <div styleName='side-bar-styles' id='side-bar'>
            <ul style={itemStyles()} className='sidebar-nav'>
                {
                    menuItems.map((menuItem,idx)=>{
                        return (
                            <SettingsMenuItem menuItem={menuItem} key={idx} idx={idx} onClick={() => onSettingsComponentClick(idx)} />
                        )
                    })
                }
            </ul>
        </div>
    )
}


// export default SettingsMenu;
export default CSSModules(SettingsMenu, style);
