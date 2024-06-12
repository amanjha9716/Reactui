import React from 'react';
import logo from '../assets/image 14.svg';  // Correct import path
import drop from '../assets/Icon/Dropdown.png';
import serachicon from '../assets/vuesax/outline/search-normal.svg'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='nav-cont'>
        <div className='logo-cont'>
            <img src={logo}  alt="" srcset="" style={{marginRight:'25px'}}/>
            <p>course </p>
            <img src={drop} alt="" style={{height:'fit-content'}} />
        </div>
        <div className="input">
        
          <input type="text" name='search' placeholder='Search for a course or category' /><img src={serachicon}/>
          <button className='login'>Login</button>
          <button className='register'>Register</button>

        </div>
    </div>
  )
}
