import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>카운터 {count}</h1>
      <button onClick = {()=>{
        setCount(prev => prev + 1)
      }}
      >
        증가
        </button>
      <h5>현재 카운트: {count}</h5>
    </>
  )
}

export default App
