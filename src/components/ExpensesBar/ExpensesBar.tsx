import { Expense } from "../../types/expense";
import { Chart } from "../Chart/Chart/Chart";

interface Props {
  filteredData: Expense[],
}

export const ExpensesBar: React.FC<Props> = ({ filteredData }) => {
  const dataPoints = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0,
    },
    {
      label: 'Apr',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'Jun',
      value: 0,
    },
    {
      label: 'Jul',
      value: 0,
    },
    {
      label: 'Aug',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];

  for (const expense of filteredData) {
    const month = expense.date.getMonth();
    dataPoints[month].value += expense.amount;
  }

  return (
    <Chart dataPoints={dataPoints} />
  )
};