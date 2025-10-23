import React from 'react'
import './Input.css';

interface InputProps {
    type ?:string,
    placeholder ?: string,
    value : string | number,
    onChange ?: (e:React.ChangeEvent<HTMLInputElement>) => void ,
    name ?:string
}

const Input:React.FC<InputProps> = ({type , placeholder , value  , onChange , name}) => {
  return (
    <div>
        <input 
        className='input-field'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required
        />
    </div>
  )
}

export default Input