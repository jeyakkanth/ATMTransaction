import React, { useEffect } from 'react'
import './Widthrawal.css';
import Input from '../../Automs/Inputs/Input';
import Label from '../../Automs/Label/Label';
import Button from '../../Automs/Buttons/Button';

const Widthrawal:React.FC = () => {

  //get last member balance details
  useEffect(() => {
    const fetchBalance = async() => {
      try{
        const res = await fetch("");
        const result = await res.json();
      }catch(err){
        console.log({err});
      }
    }
    fetchBalance();
  })

  
  return (
    <div className='container'>
        <div className='deposit1'>
           <div className='bal'>
              <h2 className='balance'>Balance : xxxx</h2>
           </div>
            <div>
              <Label label='Widthrawal Amount'/>
              <Input 
                type='number'
                placeholder=''
                name='wid-Amount'
                value=''
              />
              <Button label='Submit' onClick={onclick}/>
            </div>
        </div>
        <div className='deposit2'> 
          <div className='input-set'>
            <Label label='5000 : '/>
            <div className='value-box'>XXX</div>
          </div>
          <div className='input-set'>
            <Label label='1000 : '/>
            <div className='value-box'>XXX</div>          </div>
          <div className='input-set'>
            <Label label='500 : '/>
            <div className='value-box'>XXX</div>
          </div>
          <div className='input-set'>
            <Label label='100 : '/>
             <div className='value-box'>XXX</div>
          </div>
       </div>
    </div>
  )
}

export default Widthrawal