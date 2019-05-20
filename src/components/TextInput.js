import React from 'react';

class TextInput extends React.Component {
    render() {
        return (
            <textarea className="text" name="" id="" cols="50" rows="5" onChange={this.props.handleText} value = {this.props.message}></textarea>
        );
    }
}
export default TextInput;