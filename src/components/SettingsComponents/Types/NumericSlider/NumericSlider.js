import React from 'react';
import Slider from 'material-ui/Slider';
const foo = (value)=>{
    console.log(value.value)
    debugger
}
const NumericSlider = ({value, onChangeComplete, targetAttribute, max=10, min=0 }) => {
  return (
    <Slider
      value={value}
      defaultValue={ 0.5 }
      onChange={ (event,value)=>(onChangeComplete(targetAttribute, value)) }
      max={max}
      min={min}
    />
  )
}

module.exports = NumericSlider;
