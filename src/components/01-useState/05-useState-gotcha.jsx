import React, { useState } from 'react'

const UseStateGotcha = () => {

  const [value, setvalue] = useState(0);

  const handleClick = () => {
    // // setvalue(value + 1);
    // setvalue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });
    
    // // console.log(value);


    // SET TIMEOUT EXAMPLE
    setTimeout(() => {
      // setvalue(value + 1);
      setvalue((currentState) => {
        return currentState + 1;
      })
    }, 3000);
  }

  return (
    <div>
      <h1>{ value }</h1>
      <button className='btn' onClick={handleClick}>+1</button>
    </div>
  )
}

export default UseStateGotcha