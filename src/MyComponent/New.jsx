import React, { useState } from 'react'

const New = () => {
  const [count, setCount] = useState(0);
  // setCount(1)
    // setHehe("2345");
    // const printer = () => {setNewer('test')}
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default New
