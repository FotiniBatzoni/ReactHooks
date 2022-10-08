import React, { Component, useState, useEffect } from 'react'

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

//   componentDidMount(){
//     document.title = `Clicked ${this.state.count} times`
//   }

//   componentDidUpdate(){
//     document.title = `Clicked ${this.state.count} times`
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

//Use State

// const App = () =>{
//   //count - the current state value
//   //setCount - function that let us update the state
//   //0 - the default value
//   const [count, setCount] = useState(0)

//   //it runs every time the state is changed
//   useEffect(()=>{
//     document.title = `Clicked ${count} times`
//   })

//   const increment = () =>{
//     setCount(count +1)
//   }

//   return(
//     <div>
//         <h2>Counter App</h2>
//         <button onClick={increment}>Clicked {count} times</button>
//     </div>
//   )
 
// }


const App = () =>{
  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react')

  //fetch news
  const fetchNews = () =>{
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    .then(result => result.json())
    .then(data=>setNews(data.hits))
    .catch(error => console.log(error))
  };

  useEffect(()=>{
    fetchNews()
  },[searchQuery])
 
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <h2>News</h2>
      <form>
        <input type="text" value={searchQuery} onChange={handleChange}/>
        <button>Search</button>
      </form>
      {news.map((n,i) => (
      <p key={i}>{n.title}</p>
      ))}
    </div>
  )
}
export default App