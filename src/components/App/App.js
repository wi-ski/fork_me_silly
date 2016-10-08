import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './app.scss';
import ActiveSettingsContainer from '../../containers/ActiveSettingsContainer'
import ChinWag from '../../containers/ChinWagContainer'
import WalkThrough from '../../modules/WalkThrough'


class App extends React.Component {
    componentDidMount() {
      WalkThrough({
        url:true,
        dataKey:'pointers'
      });
    }
    render() {
        return (
            <MuiThemeProvider>
              <div className="row">
                <ActiveSettingsContainer />
                <ChinWag />
              </div>
            </MuiThemeProvider>
        )
    }
}


      /* multi
         <Route path="/" handler={App}>
           <DefaultRoute handler={Home} />
           <Route name="about" handler={About} />
           <Route name="contact" handler={Contact} />
         </Route>
         comment */

// App.propTypes = {
//     // children: React.PropTypes.node
// };




export default App;
