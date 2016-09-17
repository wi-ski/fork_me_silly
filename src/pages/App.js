require('./style.css');
require('./powr.css');
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className='formBuilderSettings' id="appSettings">
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: React.PropTypes.node
};

export default App;