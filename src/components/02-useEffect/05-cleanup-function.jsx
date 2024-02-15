import React, { useEffect, useState } from 'react'

const CleanUpFunction = () => {

  const [value, setValue] = useState(false);
  console.log('render');
  return (
    <div>
      <button className='btn' onClick={() => setValue(!value)}>toggle</button>
      { value ? <FecthComponent /> : <div><h3>Empty</h3></div> }
    </div>
  )
}

const FecthComponent = () => {

  useEffect(() => {
    console.log('Fetched');

    const intId = setInterval(() => {
      console.log('Setinterval')
    }, 1000);

    return () => {
      clearInterval(intId);
      console.log('Clenaup')
    }
  }, []);

  return <div>
    <h3>Fecth Component</h3>
  </div>

}



export default CleanUpFunction