import React from 'react'
import './NavLinkGroup.css';
import NavLink from '../../Automs/NavLink/NavLink'

const NavLinkGroup:React.FC = () => {
  return (
    <nav className='navLink'>
      <NavLink label='Deposit' href='deposit' />
      <NavLink label='Withdrawal' href='widthrawal'/>
      <NavLink label='Transaction History' href='histroy'/>
      <NavLink label='Logout' href='/'/>
    </nav>
  )
}

export default NavLinkGroup