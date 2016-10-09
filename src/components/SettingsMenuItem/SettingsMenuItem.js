import React from 'react';
import style from './style.scss'
import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {ColorPicker} from 'components/ColorPicker'
import {SketchPicker} from 'react-color';
import Chip from 'material-ui/Chip';

const handleNestedListToggle = (ListItem) => {
    console.log("NESTED TOGGLED",arguments)
    // ListItem is the containing list item, not the nested one.  You can access the nested child by ListItem.nestedItems
}

const testStyles = (confObj) => {
  var newThings = {
    [confObj.valueKey]:confObj.value
  }
  var oldThings = {
    width:'20px',
    height:'20px',
  }
  return Object.assign({},oldThings,newThings);
}


const SettingsMenuItem = ({menuItem,onChange}) => {
    return (
              <ListItem
                primaryText={menuItem.primaryText}
                secondaryText={menuItem.secondaryText}
                onNestedListToggle={handleNestedListToggle}
                nestedItems={[
                  // <ListItem key={1} primaryText="Drafts" />,
                  <SketchPicker
                        key={2}
                        onChangeComplete={(color)=> {onChange(color.hex)} }
                        color={menuItem.value}
                      />
                ]}
              />
    )
}

export default SettingsMenuItem;
