// we need to handle our state of component 
//first we need to import useState hook

import {useState} from 'react';

const Usestate = () => {
    const [fName, setfName] = useState("Krishna");

const handleChange =() => {
    const fName =['krish','sherry','tony'];
    const int = Math.floor(Math.random() *3)
    setfName(fName[int]);
}
  return (
    <div>
        <p>useState</p>
        <button onClick ={handleChange}>Click IT</button>
    </div>
  )
}

export default Usestate;