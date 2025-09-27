import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      // console.log("response :", res)
      setCount(res.data)
    })
  })

  return (
    <>
      <h1>Full Stack </h1>
      <p>Jokes : {count.length}</p>
      {
        count.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
