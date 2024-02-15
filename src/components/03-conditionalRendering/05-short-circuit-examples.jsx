import React, { useState } from 'react'

const ShortCircuitExamples = () => {

const [text, setText] = useState('');
const [name, setName] = useState('susan');
const [user, setUser] = useState({ name: 'John'});
const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{ text || 'Default value.' }</h2>
      { text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{ name }</h2>
        </div>
      )}

      { user && <SomeComponent name={user.name} />}


      <h2 style={{margin: '1rem 0'}}>Ternaryt Operator</h2>
      <button className='btn'>{ isEditing ? 'Edit' : 'Add'}</button>
      { user ? <div>
        <h4>Hello there user { user.name }</h4>
      </div> : <div> <h2> please login </h2></div>}
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return <div>
    <h2>Whatever return</h2>
    <h2>{ name }</h2>
  </div>
}

export default ShortCircuitExamples