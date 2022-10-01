import React from 'react'

export default function Content() {
  const handleNameChange = () => {
    const names =['Bob','Dave','sam'];
     const int = Math.floor(Math.random()*3);
     return names[int];
     }
  return (
    <content>
    <h3>Content Component</h3>
    <p>Hello {handleNameChange()}</p>
    </content>
  )
}
