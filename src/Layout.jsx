import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div style={{fontSize:"20px", display:"block"}}>
        <nav className='navbar navbar-expand-sm bg-success '>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link text-info' to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to="/blogs">Blogs</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to="/contact">Contact</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to="/projects">Projects</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-info' to="/services">Services</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
  
    </div>
    </>
  )
}

export default Layout