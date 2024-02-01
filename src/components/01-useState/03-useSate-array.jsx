import React, { useState } from 'react'
import {data} from '../../../data'

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    
    const _people = people.filter(p => p.id !== id);
    setPeople(_people);
  }

  const handleRemoveAll = () => {
    setPeople([]);
  }

  return (
    <div>{
        people.map(d => {
          const { id, name } = d;
          return <div key={id}>
            <h1>{ name }</h1>
            <button className='btn' onClick={ () => handleRemove(id)}>Remove</button>
          </div>
        })

      }
        <button className="btn" style={{marginTop: '30px'}} onClick={handleRemoveAll} >Clear all</button>
      </div>
  )
}

export default UseStateArray  