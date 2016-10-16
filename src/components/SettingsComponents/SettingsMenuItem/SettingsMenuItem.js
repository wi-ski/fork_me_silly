import React from 'react';
import style from './style.scss'
import {ListItem} from 'material-ui/List';

const handleNestedListToggle = (ListItem) => {
    console.log("NESTED TOGGLED",arguments)
    // ListItem is the containing list item, not the nested one.  You can access the nested child by ListItem.nestedItems
}

const simpleOnChange = (color)=>{
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*COLOR VAL*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log(color)
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
}

const SettingsMenuItem = ({type, primaryText, secondaryText, ...others}) => {
    var GutComponent = require('../Types/ColorPicker').default;
    // var foo = 'ColorPicker'
    // var _filePath = '../Types/' + foo;
    // var _filePath = `../Types/${type}`
    // var GutComponent = require(_filePath).default;
    // var GutComponent = require(`../Types/`);
    return (
              <ListItem
                primaryText={primaryText}
                secondaryText={secondaryText}
                onNestedListToggle={handleNestedListToggle}
                nestedItems={[
                  <GutComponent
                    key={1}
                    initialConfig={others}
                    onChange={simpleOnChange}
                  />
                ]}
              />
    )
}
export default SettingsMenuItem;
