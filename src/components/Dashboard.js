import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Dashboard = () => {
  const { transactions } = useContext(BudgetContext);

  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expenses;

  return (
    <div className="">
      <div className="bg-grey text-white p-4 rounded-lg">
      <h2 className="text-1xl font-semibold mb-2">Available balance</h2>
      <p className={`text-3xl font-bold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        ${balance.toFixed(2)}
      </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-incomecol p-4 rounded-lg">
          <div className='circle'>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666626 5.66666V9.00082H1.49996V14H0.666626V16.5H14L16.5 16.5008V16.5H17.3333V14H16.5V9.00082H17.3333V5.66666L8.99996 0.666656L0.666626 5.66666ZM3.99996 14V9.00082H5.66663V14H3.99996ZM8.16663 14V9.00082H9.83329V14H8.16663ZM14 14H12.3333V9.00082H14V14ZM10.6666 5.66666C10.6666 5.88558 10.6234 6.10235 10.5396 6.30459C10.4557 6.50683 10.3329 6.69058 10.1781 6.84534C10.0232 7.00011 9.8394 7.12286 9.63712 7.20658C9.43484 7.29031 9.21805 7.33338 8.99913 7.33332C8.7802 7.33327 8.56343 7.29009 8.36119 7.20626C8.15895 7.12244 7.97521 6.99959 7.82044 6.84475C7.66568 6.68991 7.54293 6.5061 7.4592 6.30382C7.37547 6.10154 7.3324 5.88475 7.33246 5.66582C7.33257 5.22369 7.50831 4.7997 7.82103 4.48714C8.13375 4.17458 8.55782 3.99905 8.99996 3.99916C9.4421 3.99927 9.86608 4.17501 10.1786 4.48773C10.4912 4.80045 10.6667 5.22452 10.6666 5.66666Z" fill="white"/>
</svg>

            
          </div>
          <p>Income</p>
          <h3 className="text-green-500 font-bold">${income.toFixed(2)}</h3>
        </div>
        <div className="bg-expensecol p-4 rounded-lg">
        <div className='circle circleex'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6667 7.5H18.3334V12.5H11.6667V7.5Z" fill="white"/>
<path d="M16.6667 2.5H4.16669C2.78835 2.5 1.66669 3.62167 1.66669 5V15C1.66669 16.3783 2.78835 17.5 4.16669 17.5H16.6667C17.5859 17.5 18.3334 16.7525 18.3334 15.8333V14.1667H11.6667C10.7475 14.1667 10 13.4192 10 12.5V7.5C10 6.58083 10.7475 5.83333 11.6667 5.83333H18.3334V4.16667C18.3334 3.2475 17.5859 2.5 16.6667 2.5Z" fill="white"/>
</svg>    
          </div>
          <p>Expense</p>
          <h3 className="text-red-500 font-bold">${expenses.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
