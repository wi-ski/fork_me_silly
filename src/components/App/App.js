import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ActiveSettingsContainer from 'containers/ActiveSettingsContainer'
import SocialMediaIconsSettings from 'containers/SocialMediaIconsSettingsContainer'
import ChinWag from 'containers/ChinWagContainer'
import SocialMediaIcons from '../SocialMediaIcons'
import WalkThrough from 'modules/WalkThrough'
import style from './style.scss'

class App extends React.Component {
    componentDidMount() {
      WalkThrough({
        url:true,
        dataKey:'pointers'
      });
    }
                // <ChinWag />
                // <ActiveSettingsContainer />
    render() {
        return (
            <MuiThemeProvider>
              <div id='application' className={style.appStyles}>
                <SocialMediaIconsSettings />
                <div id='app-view-container' className={style.appViewContainerStyles}>
                  <div className='container'>
                    <div className="row">
                      <div className="col-md-4 col-md-offset-4">
                          <SocialMediaIcons />
                      </div>
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

export default App;



// export default App;
