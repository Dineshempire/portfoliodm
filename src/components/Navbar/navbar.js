import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.pnh.jpg';
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    
    
    <nav className=' d-flex flex-row '>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='desktopMenu '>
          <Link className="desktopMenuList">Home</Link>
          <Link className="desktopMenuList">Skills</Link>
          <Link className="desktopMenuList">Projects</Link>
          <Link className="desktopMenuList">Contact Us</Link>

        </div>
        <button className='desktopbtn'>
            <img src="" alt="" className='desktopimg'/>Contact Me
        </button>
    </nav>
    
  )
}

export default Navbar