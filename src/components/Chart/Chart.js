import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            calue={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
