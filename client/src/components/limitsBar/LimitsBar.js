import * as React from "react";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { categoryTransactionsSum } from "../../utils/transactions.utils";
import CircularBar from "./utils/CircularBar";

const LimitsBar = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);

  const { transactions } = useSelector((state) => state.transactionsReducer);

  const transactionsSum = categoryTransactionsSum(transactions, categories);

  const dataArray = transactionsSum.map((element) => {
    const category = categories.find((cat) => element.categoryId === cat.id);
    let percent = (+element.value * 100) / +category.limit;
    return { label: category.label, percent };
  });

  return (
    <Stack direction={"row"} spacing={3}>
      {dataArray.map((category) => (
        <CircularBar
          key={category.label}
          percent={category.percent}
          title={category.label}
        />
      ))}
    </Stack>
  );
};

export default LimitsBar;
