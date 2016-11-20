import React from 'react';
import style from './style.scss'

const handleNestedListToggle = (ListItem) => {
    console.log("NESTED TOGGLED",arguments)
    // ListItem is the containing list item, not the nested one.  You can access the nested child by ListItem.nestedItems
}

const SettingsMenuItem = ({type, primaryText, secondaryText, onChangeComplete, adjustment,...others,}) => {
    var req = require.context("../Types", true, /^\.\/.*\.jsx?$/); //This is some webpack bs for when it compiles require statement with expressions.
    var GutComponent = req('./' + type + '/index.js');

    return (
              <li
                primaryText={primaryText}
                secondaryText={secondaryText}
                onNestedListToggle={handleNestedListToggle}
                nestedItems={[
                  <GutComponent
                    key={1}
                    onChangeComplete = {adjustment ? 
                      (key,val)=>( onChangeComplete(key, adjustment(val)) )
                      :
                      onChangeComplete
                    }
                    {...others}
                  />
                ]}
              />
    )
}
export default SettingsMenuItem;
