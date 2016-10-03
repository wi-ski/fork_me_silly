import React from 'react';
// import MessageList from '../containers/MessageListContainer'
// import MessageInput from '../containers/MessageInputContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './app.scss';
import ActiveSettingsContainer from '../../containers/ActiveSettingsContainer'
                                        // <div className='formBuilderSettings' id="appSettings">
                                        //     {this.props.children}
                                        // </div>
/*
class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.ghsidebar}>
                <ul>
                </ul>
                This text should be green
            </div>
        )
    }
}
*/



class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <ActiveSettingsContainer />
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
