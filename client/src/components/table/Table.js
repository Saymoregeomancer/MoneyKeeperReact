import {
  Box,
  Skeleton,
  Stack,
  Typography,
  TableContainer,
  Fade,
} from "@mui/material";
import TableByCategory from "./tablesType/TableByCategory";
import TableByPayments from "./tablesType/TableByPayments";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { generateTransactionWithCategory } from "../../utils/transactions.utils";
import { style } from "./Table.style";

const TableBy = ({ type = "payment" }) => {
  const { loading, error, transactions = [] } = useSelector(
    (state) => state.transactionsReducer
  );

  const { categories } = useSelector((state) => state.categoriesReducer);

  const transactionsWithCategory = useMemo(() => {
    return generateTransactionWithCategory(transactions, categories);
  }, [(categories, transactions)]);
  const elementsView = useMemo(() => {
    if (loading) {
      return (
        <Fade in={loading}>
          <Stack sx={style.stack}>
            {Array.from(Array(10)).map((_, index) => (
              <Skeleton
                key={index}
                sx={style.tableSkeleton}
                variant="rounded"
              />
            ))}
          </Stack>
        </Fade>
      );
    }

    if (error) {
      return (
        <Fade in={!!error}>
          <Typography sx={style.errorText}>{error}</Typography>
        </Fade>
      );
    }

    if (transactions.length === 0) {
      return <Typography sx={style.errorText}>Could not find</Typography>;
    }

    return (
    <Fade in={!loading && !error}>
        <Box sx={style.tableWrap}>
        {type === "category" ? (
          <TableByCategory
            transactions={transactionsWithCategory}
            categories={categories}
          />
        ) : (
          <TableByPayments transactions={transactionsWithCategory} />
        )}
      </Box>
    </Fade>
    );
  }, [
    loading,
    error,
    transactions,
    type,
    transactionsWithCategory,
    categories,
  ]);

  return (
    <TableContainer sx={style.tableContainer}>{elementsView}</TableContainer>
  );
};

export default TableBy;
