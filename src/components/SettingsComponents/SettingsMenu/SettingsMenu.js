import React from 'react';
import SettingsMenuItem from 'SettingsComponents/SettingsMenuItem';
import style from './style.scss'
import CSSModules from 'react-css-modules';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const initialState = {
  stylingOptions:{
    container:{
      'toggled':false,
      'primaryText':'Font Color',
      'secondaryText':'Customize your font color...',
      'valueKey':'borderColor',
      'value':'#010000',
      'type':'color-picker',
      'componentName':'ColorPicker',
    },
    messages:{
      'toggled':false,
      'primaryText':'Border Color',
      'secondaryText':'Customize your border color...',
      'value':'#010000',
      'valueKey':'color',
      'type':'color-picker',
      'componentName':'ColorPicker',
      'cssRule':'borderColor',
    },
    input:{
      'toggled':false,
      'primaryText':'Input Font Color',
      'secondaryText':'Customize your border color...',
      'valueKey':'color',
      'value':'#010000',
      'type':'color-picker',
      'componentName':'ColorPicker',
    }
  }
};

const itemStyles = () => {
    return {}
};

const SettingsMenu = ({ stylingOptions, activeId, onChange }) => {
    return (
        <div styleName='side-bar-styles' id='side-bar-container'>
            <List styleName='settings-menu-styles' className='sidebar-nav'>
                {
                    [
                        <SettingsMenuItem
                            type='ColorPicker'
                            primaryText='Font Color'
                            secondaryText='Pick your awesome font color and be a creative genius!'
                            onChange = {(val) => {console.log('change event fired - ' + val)} }
                            color='black'
                            // onChange = {(val) => {onChange(menuItemKey,val)} }
                        />,
                        <Divider />
                    ].map((el,key) => React.cloneElement(el, {key} ))
                }
            </List>
        </div>
    )
}

              // <Subheader>General</Subheader>


// export default SettingsMenu;
export default CSSModules(SettingsMenu, style);
