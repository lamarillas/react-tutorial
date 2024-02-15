import React, { useState } from 'react'

const UserChallenge = () => {


  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({name: 'leo amarillas'});
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <div>
      { user 
        ? (<div>
            <h3>Hello there, {user.name}</h3>
            <button className='btn' onClick={logout}>Logout</button>
          </div>)
        : (<div>
            <h3>Please login.</h3>
            <button className='btn' onClick={login}>Login</button>
          </div>) }
    </div>
  )
}

export default UserChallenge