import React, { Component, useState } from 'react'

//Counter App Using Class

// class App extends Component {

//   state = {
//     count: 0
//   }

//   increment =() =>{
//     this.setState({
//       count: this.state.count+1
//     })
//   }

//   render(){
//     return  (
//       <div>
//         <h2>Counter App</h2>
//         <button onClick={this.increment}>Clicked {this.state.count} times</button>
//       </div>
//     );
//   }
// }

const App = () =>{
  //count - the current state value
  //setCount - function that let us update the state
  //0 - the default value
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count +1)
  }

  return(
    <div>
        <h2>Counter App</h2>
        <button onClick={increment}>Clicked {count} times</button>
    </div>
  )
 
}

export default App