import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"


const Navigation = () => {
  return (
    <div>
      <ul className='navigation'>
        <Link to={"/App"}>
          {" "}
          <li>Note App</li>
        </Link>
        <Link to={"/Manager"}>
          {" "}
          <li>Manager App</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation