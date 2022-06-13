import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    console.log("Navbar")
  return (
    <div>
      <div className='navbar'>
            <div className='upper-nav'> 
                Upper nav
            </div>
            <div>
            <ul className="lower-nav flex">
              <li>
                <Link to="/Questions" > Questions </Link>  
              </li>
              <li>
              <Link to="/Responses" > Responses </Link>  
              </li>
              <li>
              <Link to="/Settings" > Settings </Link>  
              </li>
          </ul>
            </div>
          

      </div>
    </div>
  )
}

export default Navbar
