import React from 'react'
import './Label.css';

interface LabelProps{
    label : string
}

const Label:React.FC<LabelProps> = ({label}) => {
  return (
    <div>
        <label className='label-style'>{label}</label>
    </div>
  )
}

export default Label