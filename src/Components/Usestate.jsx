// we need to handle our state of component 
//first we need to import useState hook

import {useState} from 'react';

const Usestate = () => {
    const [fName, setName] = useState("Krishna");

const handleChange =() => {
    const fName =['krish','sherry','tony'];
    const int = Math.floor(Math.random() *3)
    setName(fName[int]);
}
  return (
    <div>
        <p>useState</p>
        <button onClick ={handleChange}>Click IT</button>
    </div>
  )
}

export default Usestate;