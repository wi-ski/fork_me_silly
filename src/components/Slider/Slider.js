import React from 'react';
import Slider from 'material-ui/Slider';

class Slider extends React.Component {

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
      <Slider
        color={ this.props.color }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default Slider
