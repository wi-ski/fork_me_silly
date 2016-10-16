import React from 'react';
import {SketchPicker} from 'react-color';

const ColorPicker = ({initialConfig, simpleOnChange}) => {
  return (
    <SketchPicker
      color={ initialConfig.color }
      onChangeComplete={ (color)=>(simpleOnChange(color.hex)) }
    />
  )
}

export default ColorPicker
