// import MainLayout from '../../Templates/MainLayout/MainLayout';
import Button from '../../Automs/Buttons/Button';
import './HomePage.css';

import { useNavigate } from 'react-router-dom';

const HomePage= () => {

  const navigate = useNavigate();

  const handleDeposit = () => {
    navigate("/deposit");
  }

   const handleWidthrawal = () => {
    navigate("/widthrawal");
  }

   const handleHistory = () => {
    navigate("/histroy");
  }

  const handleLogout = () => {
    navigate("/")
  }

  return (
      <div className='home-style'>
        <Button label ="Deposit" onClick={handleDeposit}/>
        <Button label='Widthrawal' onClick={handleWidthrawal}/>
        <Button label='Transaction History ' onClick={handleHistory}/>
        <Button label='Logout' onClick={handleLogout}/>
      <h1>Welcome to The ATM </h1>
    </div>
  )
}

export default HomePage;