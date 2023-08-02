import { ChartBar } from '../ChartBar/ChartBar';
import './Chart.css';

interface Props {
  dataPoints: {
    value: number,
    label: string,
  }[],
}

export const Chart: React.FC<Props> = ({ dataPoints }) => {
  const valueArray = dataPoints.map((point) => point.value);
  const maxPoint = Math.max(...valueArray);

  return (
    <div className="chart">
      {dataPoints.map((point) => 
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxPoint}
          label={point.label}
        />
      )}
    </div>
  )
};