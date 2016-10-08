import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ActiveSettingsContainer from '../../containers/ActiveSettingsContainer'
import ChinWag from '../../containers/ChinWagContainer'
import WalkThrough from '../../modules/WalkThrough'
import style from './style.scss'
import CSSModules from 'react-css-modules';

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
              <div id='application' styleName='app-styles'>
                <ActiveSettingsContainer />
                <div id='app-view-container' styleName='app-view-container-styles'>
                  <div className='container'>
                    <div className="row">
                      <ChinWag />
                    </div>
                  </div>
                </div>
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

export default CSSModules(App, style);



// export default App;
