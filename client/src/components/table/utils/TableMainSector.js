import TableBody from "@mui/material/TableBody";
import BodyCell from "./BodyCell";

const style = {
  tableBody: {
    border: "none",
  },
};

const TableMainSector = ({ transactions = [], type = "payment" }) => {
  return (
    <TableBody sx={style.tableBody}>
      {transactions.map((element) => {
        return <BodyCell key={element._id} data={element} type={type} />;
      })}
    </TableBody>
  );
};

export default TableMainSector;
