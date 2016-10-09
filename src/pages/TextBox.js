import React from 'react';

var divStyle = {
  height: '100px',
  border: '1px solid black',
  borderRadius: '2px',
  width: '100px',
  color: 'black'
}

class TextBox extends React.Component {
    incrementCount() {
        dispatch({ type: 'KEYUP'});
    }
    render() {
        return (
            <div onClick={this.incrementCount()} contentEditable="true" value={this.getState()}  style={divStyle} >
            </div>
        );
    }
}

export default TextBox;
