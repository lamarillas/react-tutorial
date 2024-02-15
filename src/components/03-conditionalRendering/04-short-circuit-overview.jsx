import React, { useState } from 'react'

const ShortCircuitOverview = () => {


  const [text, setText] = useState('');
  const [name, setName] = useState('susan');

  return (
    <div>
      <h4>Falsy OR : { text || 'Hello World!' }</h4>
      <h4>Falsy AND : { text && 'Hello World!' }</h4>
      <h4>Falsy OR : { name || 'Hello World!' }</h4>
      <h4>Falsy AND : { name && 'Hello World!' }</h4>
    </div>
  )
}

export default ShortCircuitOverview