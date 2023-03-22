import Table from "@mui/material/Table";
import TableHeader from "../utils/HeaderCell";
import TableMainSector from "../utils/TableMainSector";
import React from "react";

const style = {
  table: {
    backgroundColor: "background.white",
  },
};

const TableByPayments = ({ transactions }) => {
  return (
    <Table sx={style.table} aria-label="basic-table">
      <TableHeader />
      <TableMainSector transactions={transactions} />
    </Table>
  );
};

export default TableByPayments;
