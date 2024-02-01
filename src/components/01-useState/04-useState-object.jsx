import React, { useState } from 'react'

const UseStateObject = () => {

  // const [name, setName] = useState('Peter');

  // const [age, setAge] = useState(24);

  // const [hobby, setHobby] = useState('Read books');


  // USING OBEJCT

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'read books'
  });


  const displayPerson = () => {
    // setName('John');

    // setAge(20);
  
    // setHobby('Scream at the computer');
    
    // USING OBJECT
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'Scream at the computer'
    });
  }

  return (<>
    <h3>{ person.name }</h3>
    <h3>{ person.age }</h3>
    <h4>Enjoys: { person.hobby }</h4>
    <button className='btn' onClick={displayPerson}>Show John</button>
  </>)
}

export default UseStateObject