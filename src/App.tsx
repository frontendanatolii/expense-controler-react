import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';
import { Expense } from './types/expense';
import { SwitchButton } from './components/SwitchButton/SwitchButton';
import { ExpensesBar } from './components/ExpensesBar/ExpensesBar';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expensesData, setExpensesData] = useState(expenses);

  const [expensesToShow, setExpensesToShow] = useState(expensesData);

  const filterExpensesByYear = (year: number) => {
    setExpensesToShow(
      expensesData.filter((expense: Expense) => expense.date.getFullYear() === year)
    );
  };

  return (
    <div className="App">
      <NewExpense setExpensesData={setExpensesData} />
      <Expenses expensesData={expensesToShow} filterExpensesByYear={filterExpensesByYear} />
    </div>
  );
}

export default App;
