import React from 'react'
import Deposit from '../../Organisms/DepositForm/Deposit'
import DepositLayout from '../../Templates/DepositLayout/DepositLayout'

const DepositPage:React.FC = () => {
  return (
    <DepositLayout>
        <Deposit/>
    </DepositLayout>
  )
}

export default DepositPage