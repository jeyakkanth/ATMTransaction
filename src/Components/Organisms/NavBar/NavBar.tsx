import React from 'react'
import './NavBar.css';
import Logo from '../../Automs/Logo/Logo'
import NavLinkGroup from '../../Molecules/NavLinks/NavLinkGroup'

const NavBar:React.FC = () => {
  return (
    <div className='org-navbar'>
       <div className='Nav-logo'>
        <Logo/>
       </div>
        <div className='Nav-linkGroup'>
        <NavLinkGroup />
        </div>
    </div>
  )
}

export default NavBar