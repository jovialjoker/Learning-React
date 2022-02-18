import "./ChartBar.css";

const ChartBar = (props) => {
  let BarFillHeight = "0%";
  if (props.maxValue > 0) {
    BarFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: BarFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;

const arr = ["radu e gay", 10, "plm", 4, 9];
