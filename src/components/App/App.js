import React from 'react';
import ActiveSettingsContainer from 'containers/ActiveSettingsContainer'
import ChinWag from 'containers/ChinWagContainer'
import WalkThrough from 'modules/WalkThrough'
import style from './style.scss'

class App extends React.Component {
    componentDidMount() {
      WalkThrough({
        url:true,
        dataKey:'pointers'
      });
    }
    render() {
        return (
          <div id='application' className={style.appStyles}>
            <ActiveSettingsContainer />
            <div id='app-view-container' className={style.appViewContainerStyles}>
              <div className='container'>
                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <ChinWag />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
