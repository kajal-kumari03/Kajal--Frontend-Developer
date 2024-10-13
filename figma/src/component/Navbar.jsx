import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar1'>
            <div className='fontmenu'>Feature</div>
            <div className='fontmenu'>Why us</div>
            <div className='fontmenu'> Tokenomics</div>
            <div className='fontmenu'>Roadmap</div>
        </div>
        <div className='navbar2'>
            <div className='login'>Log in</div>
            <div className='whitepaper'>Whitepaper</div>
        </div>
    </div>
  )
}

export default Navbar