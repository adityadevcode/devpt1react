//default state can be list of array
//delete buttons we are uing react icons button
//handleclick handler to check
//     // instead of logging key number 1,2,3 
//     // we dont want to change state directly we use map

//     {/*to display a list in Jsx we need to use map  */}
//     {/* items.map higher order functions, using map we will get each items */}
//      {/* react need keys for each items */}
//             //  we are adding on change event that what we are updating code
//             // we are adding anonymous function
//             // onChange={()=>handleCheck}
//             // when we click on checkbox it will show exaxt key
//             onChange={() => handleCheck(item.id)}
//             checked={item.checked}
// changing the default 
// displaying list items with map()
// list of elements need keys
// -adding the react icons package
// -applying css styles to the react list
// -adding an onchanege listner
// -handlecheck function
// saving the state lo localstorage
// -adding an ondouble click listner
// -adding conditional css styling
// -adding an onclick listner
// -handle delete function
// -adding an empty list Message
// -when we load state from local Storage


import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Listskey = () => {
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
        <main>
         <h3>Listskey component</h3>
               {items.length ? (
            <ul>
            {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
               ):(
                // if list is empty then below
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
               )}
        </main>
    )
}



export default Listskey;