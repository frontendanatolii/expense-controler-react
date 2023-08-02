import { Expense } from "../../types/expense"
import Card from "../Card/Card"
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import { ExpensesBar } from "../ExpensesBar/ExpensesBar"
import { FilterData } from "../FilterData/FilterData"
import './Expenses.css'

interface Props {
  expensesData: Expense[],
  filterExpensesByYear: (year: number) => void,
}

const Expenses: React.FC<Props> = ({ expensesData, filterExpensesByYear }) => {
  return (
    <Card className="expenses">
      <FilterData onFilterExpenses={filterExpensesByYear} />
      <ExpensesBar filteredData={expensesData} />
      {expensesData.length
        ? expensesData.map((expense) => <ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
            key={expense.id}
          />)
        : <p className="expenses-list__fallback">There is no expenses</p>}
    </Card>
  )
}

export default Expenses;