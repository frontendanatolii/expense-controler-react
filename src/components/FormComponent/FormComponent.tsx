import { useState } from 'react';
import './FormComponent.css';
import { Expense } from '../../types/expense';

interface Props {
  setExpensesData: React.Dispatch<React.SetStateAction<{
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[]>>,
  setExpenseWindowIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export const FormComponent: React.FC<Props> = ({ setExpensesData, setExpenseWindowIsOpen }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHelper = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const amountHelper = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const dateHelper = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const setAllDataToInitialStateHelper = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setExpensesData((prevState) => {
      const newExpense: Expense = {
        id: prevState.length.toString(),
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      }

      return [
        ...prevState,
        newExpense,
      ]
    });

    setAllDataToInitialStateHelper();
    setExpenseWindowIsOpen(false);
  };

  const onCancel = () => {
    setAllDataToInitialStateHelper();
    setExpenseWindowIsOpen(false);
  }

  return (
    <form onSubmit={onSubmit} onReset={onCancel}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHelper} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountHelper} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateHelper} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit form</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  )
}