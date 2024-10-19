import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const FinancialSummary = () => {
  const { transactions } = useContext(BudgetContext);

  // Prepare income and expense categories
  const incomeCategories = {};
  const expenseCategories = {};

  transactions.forEach(transaction => {
    if (transaction.type === 'income') {
      incomeCategories[transaction.category] = (incomeCategories[transaction.category] || 0) + transaction.amount;
    } else if (transaction.type === 'expense') {
      expenseCategories[transaction.category] = (expenseCategories[transaction.category] || 0) + transaction.amount;
    }
  });

  // Create data for income ring chart
  const incomeData = {
    labels: Object.keys(incomeCategories),
    datasets: [
      {
        data: Object.values(incomeCategories),
        backgroundColor: [
          '#04BFDA', // Green for income
          '#FFA84A', // Light green for income
          '#9B88ED', // Blue for another income category
          '#FB67CA', // Light blue for additional income categories
        ],
        hoverBackgroundColor: [
          '#82dfed',
          '#ffb15c',
          '#a594ef',
          '#fb76cf',
        ],
      },
    ],
  };

  // Create data for expense ring chart
  const expenseData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: [
          '#04BFDA', // Green for income
          '#FFA84A', // Light green for income
          '#9B88ED', // Blue for another income category
          '#FB67CA', // Light blue for additional income categories
        ],
        hoverBackgroundColor: [
          '#82dfed',
          '#ffb15c',
          '#a594ef',
          '#fb76cf',
        ],
      },
    ],
  };

  // Pie chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%', // Adjust this value to create a ring effect
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Financial Summary</h2>
      <div className="flex flex-col space-y-6"> {/* Increased spacing here */}
        <div className="w-full h-64 mb-6"> {/* Added mb-6 for additional space */}
          <h3 className="text-lg font-semibold mb-2">Income Breakdown</h3>
          <Pie data={incomeData} options={options} />
        </div>
        <div className="w-full h-64">
          <h3 className="text-lg font-semibold mb-2">Expense Breakdown</h3>
          <Pie data={expenseData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
