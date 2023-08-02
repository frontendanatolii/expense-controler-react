import { useState } from "react";
import { FormComponent } from "../FormComponent/FormComponent";
import './NewExpense.css';
import { SwitchButton } from "../SwitchButton/SwitchButton";

interface Props {
  setExpensesData: React.Dispatch<React.SetStateAction<{
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[]>>,
};

export const NewExpense: React.FC<Props> = ({ setExpensesData }) => {
  const [isNewExpenseWindowIsOpen, setExpenseWindowIsOpen] = useState(false);

  return (
    <div className="new-expense">
      {isNewExpenseWindowIsOpen
        ? <FormComponent setExpensesData={setExpensesData} setExpenseWindowIsOpen={setExpenseWindowIsOpen} />
        : <SwitchButton setExpenseWindowIsOpen={setExpenseWindowIsOpen} />
      }
    </div>
  )
}