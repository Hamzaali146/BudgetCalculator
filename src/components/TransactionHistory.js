import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(BudgetContext);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <ul className="space-y-4 bg-white shadow-sm rounded">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div>
        
              <p className="text-sm text-transdict">{transaction.category}</p>
              <p className={`text-textblack font-bold text-2xl ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                ${transaction.amount.toFixed(2)}
              </p>
              
              <p className="font-semibold text-transdict">{transaction.description}</p>
              
            </div>
            <div className="flex space-x-2 items-center">
              <p className={`${transaction.type === 'income' ? 'bg-gre' : 'bg-red'} ${transaction.type === 'income' ? 'text-green' : 'text-redtxt'} rounded`}>{transaction.type}</p>
              <button onClick={() => deleteTransaction(transaction.id)} className="text-red-500">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1551)">
<path d="M1.875 3.125H18.125M6.875 3.125V1.84375C6.875 1.52052 7.0034 1.21052 7.23196 0.981964C7.46052 0.753404 7.77052 0.625 8.09375 0.625H11.9062C12.0663 0.625 12.2248 0.656524 12.3726 0.717772C12.5205 0.77902 12.6549 0.868792 12.768 0.981964C12.8812 1.09513 12.971 1.22949 13.0322 1.37735C13.0935 1.52522 13.125 1.6837 13.125 1.84375V3.125M16.4062 3.125L15.5 17.8437C15.492 18.2474 15.3281 18.6322 15.0427 18.9177C14.7572 19.2031 14.3724 19.367 13.9688 19.375H6.03125C5.62764 19.367 5.24279 19.2031 4.95734 18.9177C4.67189 18.6322 4.50799 18.2474 4.5 17.8437L3.59375 3.125" stroke="#D14D4D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5.625V16.875M6.875 5.625L7.5 16.875M13.125 5.625L12.5 16.875" stroke="#D14D4D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_1551">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
