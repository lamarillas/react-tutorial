import React, { useEffect } from 'react'
import { useState } from 'react'

const MultipleRetunsBasics = () => {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  }, []);

  if(isLoading) {
    return <h2> Loading...</h2>
  }

  return (
    <h2>01-multiple-retuns-basics</h2>
  )
}

export default MultipleRetunsBasics