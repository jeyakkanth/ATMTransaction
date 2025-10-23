import React from 'react'
import LoginFormLayout from '../../Templates/LoginFormLayout/LoginFormLayout'
import LoginForm from '../../Organisms/LoginForm/LoginForm'

const LoginFormPage:React.FC = () => {
  return (
    <LoginFormLayout>
        <LoginForm/>
    </LoginFormLayout>
  )
}

export default LoginFormPage