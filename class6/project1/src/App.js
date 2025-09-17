import React, { useEffect, useState } from 'react'
import Card from './components/Card'

function App() {
  const [id, setId] = useState(1)
  const [data, setData] = useState()

  async function apiCall(url) {
    try {
      let res = await fetch(url)
      let data = await res.json()
      setId(data?.id)
      setData(data)
      console.log(id)
    }
    catch (error) {
      console.log("getting an error during api calling", error)

    }
  }
  useEffect(() => {
    apiCall(`https://fakestoreapi.com/products/${id}`)
  }, [id])


  function increment() {
    if (id >= 20) {
      setId(1)
      return;
    }
    setId(id + 1)

  }

  function Decrement() {
    if (id <= 1) {
      setId(20)
      return;
    }
    setId(id - 1)
  }


  return (
    <div>
      <Card data={data} />
      <div className="counter">
        <button className="btn btn-primary" onClick={increment}>-</button>
        <div className="count-display">{id}</div>
        <button className="btn btn-danger" onClick={Decrement}>+</button>
      </div>


    </div>
  )
}

export default App
