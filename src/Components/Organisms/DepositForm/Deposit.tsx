import React, { useState } from 'react'
import InputField from '../../Molecules/InputField/InputField'
import './Deposit.css';
import Button from '../../Automs/Buttons/Button';
import Input from '../../Automs/Inputs/Input';
import Label from '../../Automs/Label/Label';

const Deposit:React.FC = () => {

  const [depositAmount , setDepositAmount] = useState<number>(0);
  const [count5000 , setCount5000] = useState<number >(0);
  const [count1000 , setCount1000] = useState<number>(0);
  const [count500 , setCount500] = useState<number>(0);
  const [count100 , setCount100] = useState<number>(0);

  const amount = (count5000 * 5000) + (count1000 * 1000) + (count500 * 500) + (count100 * 100);

  const handleSubmit = async() => {
    if(amount === depositAmount && amount > 0){
      alert("success");
      try{
        const bodyData = {
          depositAmount : depositAmount
        }
        const res = await fetch("" , {
          method : "POST",  
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify(bodyData)
        });
        const result = await res.json();
        console.log({result});

        setCount5000(Number());
        setCount1000(Number());
        setCount500(Number());
        setCount100(Number());
      }catch(err){
        console.log({err});
      }
    }else{
       alert('Amount mismatch or empty fields!');
    }
  }

  return (
    <div className='deposit-container'>
       <div className='deposit1'>
         <h2 className='h2'>DEPOSIT</h2>
          <InputField
          type='Number'
          placeholder='xxx xxx xxx'
          label='Enter Amount'
          onChange={(e) => setDepositAmount(Number(e.target.value))}
          value={depositAmount}
          name='deposit-amount'
        />
        {/* <Button label='Submit' onClick={handleAmount}/> */}
       </div>

       <div className='deposit2'>
          <div className='input-set'>
            <Label label='5000'/>
            <Input type='number' placeholder='xxx' name='amount-5000' value = {count5000} onChange={(e) => setCount5000(Number(e.target.value))}/>
          </div>
          <div  className='input-set'>
            <Label label='1000'/>
            <Input type='number' placeholder='xxx' name='amount-5000' value={count1000} onChange={(e) => setCount1000(Number(e.target.value))}/>
          </div>
          <div  className='input-set'>
            <Label label='500'/>
            <Input type='number' placeholder='xxx' name='amount-5000' value={count500} onChange={(e) => setCount500(Number(e.target.value))}/>
          </div>
          <div  className='input-set'>
            <Label label='100'/>
            <Input type='number' placeholder='xxx' name='amount-5000' value={count100} onChange={(e) => setCount100(Number(e.target.value))}/>
          </div>
          <div  className='input-set'>
            <Button label='Submit' onClick={handleSubmit}/>
          </div>
       </div>
    </div>
  )
}

export default Deposit