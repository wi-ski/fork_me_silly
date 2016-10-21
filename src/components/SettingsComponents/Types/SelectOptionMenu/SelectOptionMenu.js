import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const SelectOptionMenu = ({value, onChangeComplete, targetAttribute, optionList,key }) => {
  return (
    <DropDownMenu value={value} onChange={(event,index,value)=>(onChangeComplete(targetAttribute,value,key))}>
      {
        optionList.map((option,idx)=>{
            var value,label,primaryText;
            if(typeof option === 'string'){
                value = label = primaryText = option;
            }else{
                value = option.value;
                label = option.label;
                primaryText = option.primaryText;
            }

            return (
                <MenuItem key={idx} value={value} style={{'fontFamily':value}} label={label} primaryText={primaryText} />
            )
        })
      }
    </DropDownMenu>
  )
}

module.exports = SelectOptionMenu;
