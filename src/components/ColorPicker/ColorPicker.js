import React from 'react';
import {SketchPicker} from 'react-color';

class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
  }
  handleChangeComplete(color) {
    console.log("Change complete",color)
    this.setState({ background: color.hex });
  }

  handleOnChange(color) {
    console.log(color)
  }

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default ColorPicker
