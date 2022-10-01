const Content = () => {
  const handleNameChange = () => {
      const names = ['Bob', 'Kevin', 'Dave'];
      const int = Math.floor(Math.random() * 3);
      return names[int];
  }

  // simple on click button
const handleClick = () => {
  console.log('you clicked');
}

//double click events
const handleClick1 = () => {
  console.log('double clicked');
}

//passing a parameter in a click event

const handleClick2 = (name) => {
  console.log(`${name} was clicked`);
}

// passign event obj in the click event function

const handleClick3 = (e) => {
  console.log(e);
}

// we are referencing event target now/it will show button click it
const handleClick4 = (e) => {
  console.log(e.target);
}

// we are getting inner text of button /click it
const handleClick5 = (e) => {
  console.log(e.target.innerText);
}


  return (
      <main>
          <p>
              Hello {handleNameChange()}!
          </p>
          {/* double click */}
         <p onDoubleClick={handleClick1}>
         New Paragraph!
         </p>

        {/* if we keep () it will call immediately */}
          <button onClick={handleClick}>Click IT</button>
         {/* we need anonynous function below */}
          <button onClick={() => {handleClick2('krishna')}}>Click IT</button>
          {/* event obj in click event fun //we get full event obj*/}
          <button onClick={(e) => handleClick3(e)}>Click IT</button>
   {/* we are referenceing event target it will show button click it*/}
   <button onClick={(e) => handleClick4(e)}>Click IT</button>
{/* ref inner text of button/ click it */}
<button onClick={(e) => handleClick5(e)}>Click IT</button>

    </main>
  )
}

export default Content

//React Click Events
//react listen for other click events /double click
