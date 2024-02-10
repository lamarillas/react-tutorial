import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {

  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log(`Saye hello ${value}`)
  }


  sayHello();

  useEffect(() => {
    console.log("Hello from useEffect");
  }, []);


  return (
    <div>
      <h1>{ value }</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
    </div>
  )
}

export default UseEffectBasic