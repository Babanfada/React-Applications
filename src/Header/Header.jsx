import React from 'react'
import "./Header.css"
import { nameContext } from '../App'
import { useContext } from 'react'


const Header = () => {
    const { setmode, mode } = useContext(nameContext);
  return (
    <div className='head'>
       <h1>Note</h1>
       <button onClick={()=>{setmode(previousState => !previousState)
      
    }}>Toggle Mode</button>
    </div>
  )
}

export default Header