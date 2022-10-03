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

// import React from 'react'
// import Header from './Components/Header'
// import Content from './Components/Content'
// import Footer from './Components/Footer'


// export default function App() {
//   return (
//     <div>
//       <h3> App component</h3>
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   )
// }

//styled components
// inside css styling  

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      //it will save listitems in shopping list local storage
     //we are saving to local storage we can pull later 
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;