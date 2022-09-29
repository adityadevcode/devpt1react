// import './App.css';
// import Home from'./Components/Home';

// function App() {
//   const name ="krish"
//   // inserting handleNameChange function
//   const handleNameChange = () => {
//     const names =['Bob','Dave','sam'];
//     const int = Math.floor(Math.random()*3);
//     return names[int];
//   }

//   return (
//     <div>
//       <p>{name}</p>
//       <p>{1+1}</p>
//       <p>{2===2}</p>
//       <h3>React Application</h3>
//       <p>Hello {name}</p>
//       {/* <Home /> */}
//       <p>Hello {handleNameChange()}!</p>
//     </div>
//   );
// }

// export default App;

//Above code we are using event handleName function

import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'


export default function App() {
  return (
    <div>
      <h3> App component</h3>
      <Header />
      <Content />
    </div>
  )
}
