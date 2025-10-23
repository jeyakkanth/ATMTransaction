import React from 'react'
import './TransactionHit.css';

const TransactionHit:React.FC = () => {
  return (
    <div className='his-container'>
      <div className='his-head'>
        <h1>Transaction Histroy</h1>
        <div className='main-container'>
        <div className='select-container'>
            <select name="" id="">
              <option value="Deposit">Deposit</option>
              <option value="widthrawal">Widthrawal</option>
            </select>
        </div>
      </div>
     
     <div className='his-table'>
       <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>5000</th>
            <th>1000</th>
            <th>500</th>
            <th>100</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
     </div>
      </div>
    </div>
  )
}

export default TransactionHit