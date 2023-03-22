import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, registerables } from "chart.js";
import { pieOptions } from "../chartConfig";
import { categoryTransactionsSum } from "../../../utils/transactions.utils";

ChartJS.register(...registerables);

const PieChart = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { transactions } = useSelector((state) => state.transactionsReducer);

  const dataSet = [];
  const labels = [];

  categoryTransactionsSum(transactions, categories).forEach(
    ({ label, value }) => {
      if (label === "income") {
        return null;
      }
      labels.push(label);
      dataSet.push(value);
    }
  );

  return (
    <Doughnut
      data={{
        labels: labels,
        datasets: [{ data: dataSet }],
      }}
      options={pieOptions}
    />
  );
};

export default PieChart;
