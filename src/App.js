import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "sam",
    age: 31
  }
  changeName = (newName, newAge) => {
    this.setState({
        name: newName,
        age: newAge
    })
  }
  changeNameFromInput = (event) => {
    this.setState({
        name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <br/><br/>
      <button onClick={() => this.changeName("Awesome Sam Anon", 16)}>Change state</button><br/>
      <button onClick={this.changeName.bind(this, "Awesome Sam Bound", 40)}>Change state using bind</button><br/>
      <input type = "text" onChange = {this.changeNameFromInput} value = {this.state.name}/>
      <div>{this.state.name}</div>
      <div>{this.state.age}</div>

      </div>
    );
  }
}

export default App;
