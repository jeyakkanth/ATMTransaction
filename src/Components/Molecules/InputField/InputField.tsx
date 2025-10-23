import React from 'react'
import Label from '../../Automs/Label/Label'
import Input from '../../Automs/Inputs/Input'
import './InputField.css';

interface InputFieldProps{
    label : string,
    type ?: string, 
    placeholder ?:string , 
    name ?:string , 
    value ?: string | number ,
    onChange ?: (e:React.ChangeEvent<HTMLInputElement>) => void   
}

const InputField:React.FC<InputFieldProps> = ({type , placeholder , name , value , onChange , label}) => {
  return (
    <div className='inputField'>
        <Label label={label}/>
        <Input 
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default InputField