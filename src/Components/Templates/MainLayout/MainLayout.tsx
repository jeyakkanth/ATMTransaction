import React from 'react'
import NavBar from '../../Organisms/NavBar/NavBar'

const MainLayout:React.FC <{children:React.ReactNode}> = ({children}) => {
  return (
    <div>
        <NavBar/>
        <main>{children}</main>
    </div>
  )
}

export default MainLayout