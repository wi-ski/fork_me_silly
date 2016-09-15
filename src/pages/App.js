require('./style.css');
require('./powr.css');
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid editor-container clearfix'>
                    <div className='formBuilderSettings' >
                        {this.props.children}
                    </div>
                <div>
            </div>
        )
    }
}

App.propTypes = {
    children: React.PropTypes.node
};

export default App;