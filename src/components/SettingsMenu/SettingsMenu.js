import React from 'react';
import SettingsMenuItem from '../SettingsMenuItem';
import SliderControlled from 'components/Slider';
import style from './style.scss'
import CSSModules from 'react-css-modules';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const itemStyles = () => {
    return {}
};

const SettingsMenu = ({ stylingOptions, activeId, onChange }) => {
    return (
        <div styleName='side-bar-styles' id='side-bar-container'>
            <List styleName='settings-menu-styles' className='sidebar-nav'>
                {
                    Object.keys(stylingOptions).map((menuItemKey,idx)=>{
                        return (
                            <div key={idx} >
                                <SettingsMenuItem
                                    menuItemKey = { menuItemKey }
                                    menuItem = { stylingOptions[menuItemKey] }
                                    onChange = {(val) => {onChange(menuItemKey,val)} }
                                />
                                <Divider />
                            </div>
                        )
                    })
                }
            </List>
            <SliderControlled />
        </div>
    )
}

              // <Subheader>General</Subheader>


// export default SettingsMenu;
export default CSSModules(SettingsMenu, style);
