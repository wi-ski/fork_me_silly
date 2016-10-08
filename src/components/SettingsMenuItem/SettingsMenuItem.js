import React from 'react';
import style from './style.scss'



import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';






const itemStyle = (menuItem) => {
    return {
        color:(menuItem.toggled ? 'red' : 'green'),
        height:(menuItem.toggled ? 'auto' : '100px')
    }
}

const SettingsMenuItem = ({menuItem,onClick,idx}) => {
    return (
        <li className={style.menuItem} onClick={() => ( onClick(idx) )} >
            <List>
              <Subheader>General</Subheader>
              <ListItem
                primaryText="Profile photo"
                secondaryText="Change your Google+ profile photo"
              />
              <ListItem
                primaryText="Show your status"
                secondaryText="Your status is visible to everyone you use with"
              />
            </List>
            <a style={itemStyle(menuItem)} href="#">
                {menuItem.itemTitle}
            </a>
            <Divider />
        </li>
    )
}

export default SettingsMenuItem;
