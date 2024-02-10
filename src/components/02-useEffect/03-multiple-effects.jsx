import React, { useEffect, useState } from 'react'

const MultipleEffects = () => {

  const [value , setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("Hello from first useEffect")
  }, [value]);

  useEffect(() => {
    console.log("Hello from second useEffect")
  }, [secondValue]);

  return (
    <div>
      <h1>Value: { value }</h1>
      <button style={{marginBottom: '13px'}} className='btn' onClick={() => setValue(value + 1)}>
        increment value
        </button>
      <hr />
      <h1>Second value: { secondValue }</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>increment second value</button>
    </div>
  )
}

export default MultipleEffects