import React from 'react'
import './NavLink.css';

interface NavLinkProps{
    label : string , 
    href ?: string
}

const NavLink:React.FC<NavLinkProps> = ({href , label}) => {
  return (
    <div>
        <a 
        className='nav-link'
        href={href}>{label}</a>
    </div>
  )
}

export default NavLink