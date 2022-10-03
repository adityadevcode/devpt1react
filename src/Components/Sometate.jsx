// we need to handle our state of component 
//first we need to import useState hook

import {useState} from 'react';

const Sometate = () => {
    const [name, setName] = useState("Krishna");

const handleNameChange=() => {
    const name =['krish','sherry','tony'];
    const int = Math.floor(Math.random() *3);
    setName(name[int]);
}
  return (
    <div>
        <p>useState{name}</p>
        <button onClick ={handleNameChange}>Click IT</button>
    </div>
  )
}

export default Sometate;