import { useState } from "react";
import './FilterData.css';

interface Props {
  onFilterExpenses: (year: number) => void,
};

export const FilterData: React.FC<Props> = ({ onFilterExpenses }) => {
  const [selectedYear, setSelectedYear] = useState<undefined | number>(undefined);
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(+event.target.value);
    onFilterExpenses(+event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={onSelect}>
          <option value="undefined" disabled={!!selectedYear}>Select an year</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}