import React from 'react';
import SettingsMenuItem from '../SettingsMenuItem';
import style from './style.scss'
import CSSModules from 'react-css-modules';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const itemStyles = () => {
    return {}
};

const SettingsMenu = ({ menuItems, activeId,onSettingsComponentClick }) => {
    return (
        <div styleName='side-bar-styles' id='side-bar-container'>
            <List styleName='settings-menu-styles' className='sidebar-nav'>
                {
                    menuItems.map((menuItem,idx)=>{
                        return (
                            <div key={idx} >
                                <SettingsMenuItem menuItem={menuItem} idx={idx} onClick={() => onSettingsComponentClick(idx)} />
                                <Divider />
                            </div>
                        )
                    })
                }
            </List>
        </div>
    )
}

              // <Subheader>General</Subheader>


// export default SettingsMenu;
export default CSSModules(SettingsMenu, style);
