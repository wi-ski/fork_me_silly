import React from 'react';
import MessageList from '../containers/MessageListContainer'
                                        // <div className='formBuilderSettings' id="appSettings">
                                        //     {this.props.children}
                                        // </div>
class App extends React.Component {
    render() {
        return (
            <div>
                <MessageList />
            </div>
        )
    }
}

// App.propTypes = {
//     // children: React.PropTypes.node
// };




export default App;
