import React , {useEffect, useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Counter: ${count}`
    },[count])

  return (
    <div>
        <h1>Counter</h1>
        <p>Current Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter;