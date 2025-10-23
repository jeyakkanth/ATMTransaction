import React from 'react'
import './Button.css';

interface ButtonProps {
    label : string,
    onClick ?: () => void ;
    type?:"submit" | "reset" | "button" |  undefined
}

const Button:React.FC<ButtonProps> = ({label , onClick , type}) => {
  return (
    <div>
        <button
        className='btn' 
        onClick={onClick}
        type={type}
        >{label}</button>
    </div>
  )
}

export default Button