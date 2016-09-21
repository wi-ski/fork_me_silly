
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

const Texteditor = ({ value }) => (
  <div contentEditable="true" >{value}</div>
)


App.propTypes = {
    children: React.PropTypes.node
};




export default Texteditor;
