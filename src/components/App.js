import React, {Component} from 'react';


//function App() {
//
//  return (
//  <React.Fragment>
 //   <label htmlFor="bar">bar</label>
 //     <input type="text" onChange={() => {console.log("I am clicked.")}} />
//  </React.Fragment>
 // );
//}

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
  return (
    <React.Fragment>
    <div>count: {this.state.count}</div>
    <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={this.handlePlusButton}>-1</button>
    </React.Fragment>
  )
  }
}

export default App;
