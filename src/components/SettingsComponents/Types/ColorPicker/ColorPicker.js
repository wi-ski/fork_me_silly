import React from 'react';
import {SketchPicker} from 'react-color';

const ColorPicker = ({color, onChangeComplete, targetAttribute }) => {
  return (
    <SketchPicker
      color={ color }
      onChange={ (color)=>(onChangeComplete(targetAttribute, color.hex)) }
    />
  )
}

module.exports = ColorPicker;
