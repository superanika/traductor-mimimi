import React from 'react';
import './App.css';
import TextInput from './components/TextInput';
import MIMIMITranslator from './components/MIMIMITranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      mimimi: ''
    }
    this.handleText = this.handleText.bind(this);
  }
  handleText (event) {
    const userMsg = event.currentTarget.value;
    const traducction = userMsg.replace(/[aeiou]/ig,'i');
    
    this.setState({
      message: userMsg,
      mimimi: traducction
    })
  }

  render () {
    return (
      <div className="App">
        <h1 className="title">Tiquis Miquis</h1>
        <TextInput 
        handleText = {this.handleText}
        message = {this.state.message}
        />
        <MIMIMITranslator 
        mimimi = {this.state.mimimi}
        />
      </div>
    );
  }
}

export default App;
