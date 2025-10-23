import React, { useState } from 'react'
import InputField from '../../Molecules/InputField/InputField'
import './LoginForm.css';
import Button from '../../Automs/Buttons/Button';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm:React.FC = () => {

  const navigate = useNavigate();
  const signup = useAuth();
  const [cardNo , setcardNo] = useState<string>("");
  const [pin , setPin] = useState<string>("")

  const [isTrue , setIsTrue] = useState<boolean>();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/ATM_Transaction/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardNo : Number(cardNo), pin:Number(pin) })
      });
      // const result = await res.json();
      // console.log({ result });

      // console.log(res.ok);
      console.log(res);
      
      if (res.ok) {
        signup.login(Number(cardNo) , Number(pin))
        setIsTrue(signup.isAuthenticated);
        alert("successful")
        console.log({isTrue});
        navigate("/home");

      } else {
        alert("Login failed");
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };



  return (
    <div className='Loginform-container'>
        <form className='Loginform' onSubmit={(e) => e.preventDefault()}>
         <h2>USER LOGIN</h2>
         <InputField 
          type='number' 
          placeholder='xxxx-xxxx-xxxx-xxxx' 
          name='account-number'
          value={cardNo} 
          onChange={(e) => setcardNo((e.target.value))}
          label='Acount Number'/>

         <InputField 
          label='Enter Pin Number'
          type='number'
          placeholder='xxx'
          name='pin-number'
          value={pin}
          onChange={(e) => setPin((e.target.value))}
         />
         <Button 
          label='Submit'
           type='button'
           onClick={handleLogin}
         />
        </form>
    </div>
  )
}

export default LoginForm