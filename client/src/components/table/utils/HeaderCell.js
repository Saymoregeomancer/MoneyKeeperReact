import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const style = {
  tableHeadRow: {
    borderBottom: 1,
    borderColor: "grey.A200",
  },
  tableHeadRowCell: { color: "light.main", width: "100%" },
};

const defaultLabels = ["Категорія", "Дата", "Гроші"];

const HeaderCell = ({ labels = defaultLabels }) => {
  return (
    <TableHead>
      <TableRow sx={style.tableHeadRow}>
        {labels.map((elem) => {
          return (
            <TableCell sx={style.tableHeadRowCell} key={elem}>
              {elem}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default HeaderCell;
