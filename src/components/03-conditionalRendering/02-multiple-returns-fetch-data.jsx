import React, { useEffect, useState } from 'react'

const url = "https://api.github.com/users/QuincyLarson";


const MultipleReturnsFectchData = () => { 

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {
      try {

        const data = await fetch(url);

        if(!data.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const userData = await data.json();
        setUser(userData);
        
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchUser();

  }, []);


  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>There was an error!</h2>
  }

  const { name, avatar_url, bio, company } = user;

  return (
    <div>
      <h2>Fetch Data</h2>
      <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt={bio} />
      <h2>{ name }</h2>
      <h4>{ company &&  `Works at ${company}` }</h4>
      <p>{ bio && bio}</p>
    </div>
  )
}

export default MultipleReturnsFectchData