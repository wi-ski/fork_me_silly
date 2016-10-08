import React from 'react';
import style from './style.scss'
import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {ColorPicker} from 'components/ColorPicker'
import {SketchPicker} from 'react-color';



const itemStyle = (menuItem) => {
    return {
        color:(menuItem.toggled ? 'red' : 'green'),
        height:(menuItem.toggled ? 'auto' : '100px')
    }
}

const handleNestedListToggle = (ListItem) => {
    // ListItem is the containing list item, not the nested one.  You can access the nested child by ListItem.nestedItems

}


const SettingsMenuItem = ({menuItem,onColorChange,idx,selectedColor}) => {
    return (
              <ListItem
                primaryText="Profile photo"
                secondaryText="Change your Google+ profile photo"
                open={true}
                onNestedListToggle={handleNestedListToggle}
                nestedItems={[
                  <ListItem key={1} primaryText="Drafts" />,
                  <SketchPicker
                    key={2}
                    onChangeComplete={ onColorChange }
                    color={selectedColor}
                  />
                ]}
              />
    )
}

/*
             <a style={itemStyle(menuItem)} href="#">
                {menuItem.itemTitle}
            </a>
*/
export default SettingsMenuItem;
