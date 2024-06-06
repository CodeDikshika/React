import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        <h1>Dikshika Bansal</h1>
        <main>
        <Link to={"/#home"}>Home</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      
      
        
        </main>
    </nav>
  )
}

export default Header