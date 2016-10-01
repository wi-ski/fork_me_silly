import React from 'react';
// import MessageList from '../containers/MessageListContainer'
// import MessageInput from '../containers/MessageInputContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './app.css';
                                        // <div className='formBuilderSettings' id="appSettings">
                                        //     {this.props.children}
                                        // </div>
class SideBar extends React.Component {
    render() {
        return (
            <div className='gh-side-bar'>
                This text should be green
            </div>
        )
    }
}



class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <SideBar />
            </MuiThemeProvider>
        )
    }
}

// App.propTypes = {
//     // children: React.PropTypes.node
// };




export default App;
