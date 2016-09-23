import React from 'react';
import MessageList from '../containers/MessageListContainer'
import MessageInput from '../containers/MessageInputContainer'
                                        // <div className='formBuilderSettings' id="appSettings">
                                        //     {this.props.children}
                                        // </div>
class App extends React.Component {
    render() {
        return (
            <div>
                <MessageList />
                <MessageInput />
            </div>
        )
    }
}

// App.propTypes = {
//     // children: React.PropTypes.node
// };




export default App;
