import React from 'react';


const SelectOptionMenu = ({value, onChangeComplete, targetAttribute, optionList }) => {
  return (
    <ul value={value} onChange={(event,index,value)=>(onChangeComplete(targetAttribute,value))}>
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
                <li key={idx} value={value} style={{'fontFamily':value}} label={label} primaryText={primaryText} />
            )
        })
      }
    </ul>
  )
}

module.exports = SelectOptionMenu;
