import {
  getMonthDaysRangeArray,
  dateFormaterToType,
} from "../../../utils/date.utils";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { barOptions } from "../chartConfig";

ChartJS.register(...registerables);

const BarChart = () => {
  // date sector
  const { activeDate } = useSelector((state) => state.transactionsReducer);
  const labels = getMonthDaysRangeArray(activeDate).map((element) =>
    dateFormaterToType(element, "DD")
  );
  const month = dateFormaterToType(activeDate, "MMM YYYY");

  // data sector
  let monthStart = 16;
  const { transactions } = useSelector((state) => state.transactionsReducer);
  const expensesArr = transactions.map(({ category, value }) => {
    if (category !== "income") {
      return (monthStart = monthStart - value);
    }

    return (monthStart = monthStart + value);
  });

  const data = {
    labels,
    datasets: [
      {
        label: month,
        data: expensesArr,
        backgroundColor: "rgba(255,211,28,0.8)",
      },
    ],
  };

  return (
    <Bar style={{ height: "100%" }} data={data} options={{ ...barOptions }} />
  );
};
export default BarChart;
