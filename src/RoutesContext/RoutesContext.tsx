import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginFormPage from "../Components/Pages/LoginFormPage/LoginFormPage";
import HomePage from "../Components/Pages/HomePage/HomePage";
import Deposit from "../Components/Organisms/DepositForm/Deposit";
import Widthrawal from "../Components/Organisms/Widthrawal/Widthrawal";
import TransactionHit from "../Components/Organisms/TransactionHistrory/TransactionHit";
const RoutesContext: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log({ isAuthenticated });

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/widthrawal" element={<Widthrawal />} />
          <Route path="/histroy" element={<TransactionHit />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LoginFormPage />} />
        </>
      )};
    </Routes>
  );
};

export default RoutesContext;
