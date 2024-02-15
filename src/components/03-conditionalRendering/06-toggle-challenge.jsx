import React, { useState } from 'react'

const ToggleChallenge = () => {

const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}> 
        toggle
      </button>

      { showAlert && <Alert /> }
    </div>
  ) 
}


const Alert = () => {
  return <div className='alert alert-danger'>
    Danger!
  </div>
}
export default ToggleChallenge