import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { TransactionChangerForm } from "../../../services/forms";

const style = {
  tableRow: {
    transition: "all 1000ms",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "secondary.main",
    },
  },
  eventForm: {
    p: "1px",
  },
  cell: {
    border: "none",
  },
};

const BodyCell = ({ data, type }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <TableRow
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={style.tableRow}
    >
      {type === "payment" ? (
        <TableCell sx={style.cell} component="th" scope="row">
          {data.category || "Категорія видалена)"}
        </TableCell>
      ) : null}

      <TableCell sx={style.cell} component="th" scope="row">
        {data.date}
      </TableCell>

      {!isHover ? (
        <TableCell
          sx={style.cell}
          style={
            data.category !== "income" ? { color: "red" } : { color: "green" }
          }
          align="right"
        >
          {data.value}
        </TableCell>
      ) : (
        <TableCell sx={{ ...style.eventForm, ...style.cell }}>
          <TransactionChangerForm id={data._id} />
        </TableCell>
      )}
    </TableRow>
  );
};
export default BodyCell;
