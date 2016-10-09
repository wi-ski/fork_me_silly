import React from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  slider: {
    trackColor: 'yellow',
    selectionColor: 'green'
  },
});

const theSlider = () => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
        <Slider />
    </MuiThemeProvider>
  </div>
);

export default theSlider
