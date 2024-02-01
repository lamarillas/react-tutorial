
import React from "react";

// This example show us the importance of using useState Hook for render our changes in the view.
const ErrorExample = () => {

  let count = 0;

  const handleClick = () => {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>Increase</button>
    </div>
  )
}

export default ErrorExample