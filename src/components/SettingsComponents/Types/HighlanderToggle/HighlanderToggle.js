import React from 'react';
import Toggle from 'material-ui/Toggle';

//There can only be one.

const HighlanderToggle = ({ optionList=[] }) => {
  return (
    <div>
        {
            optionList.map((option,idx)=>(
                <Toggle
                  key={idx}
                  onToggle={(event,toggled)=>{debugger}}
                  label="Simple"
                />
            ))
        }
    </div>
  )
}

module.exports = HighlanderToggle;
