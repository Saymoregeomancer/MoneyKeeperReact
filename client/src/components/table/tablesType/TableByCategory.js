import Table from "@mui/material/Table";
import HeaderCell from "../utils/HeaderCell";
import TableMainSector from "../utils/TableMainSector";
import React from "react";
import { sortTransactionsByCategory } from "../../../utils/transactions.utils";
import { useMemo } from "react";

const style = {
  table: {
    backgroundColor: "background.white",
  },
};

const TableByCategory = ({ transactions, categories }) => {
  const sortedStransactions = useMemo(
    () => sortTransactionsByCategory(transactions, categories),
    [transactions, categories]
  );

  return (
    <Table sx={style.table} aria-label="basic-table">
      {sortedStransactions.map((element) => (
        <React.Fragment key={element.label}>
          <HeaderCell labels={[element.label, "price"]} />
          <TableMainSector
            type={"category"}
            transactions={element.filtredPayments}
          />
        </React.Fragment>
      ))}
    </Table>
  );
};

export default TableByCategory;
