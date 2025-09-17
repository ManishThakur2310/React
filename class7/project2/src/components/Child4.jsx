import React from 'react'
import { useContext } from 'react'
import { myContext } from '../index'
function Child4() {
    const username = useContext(myContext)
  return (
    <div>
        <p>
            {username}
        </p>
      
    </div>
  )
}

export default Child4
