import { useState, useEffect } from "react";
import { Button, Switch, Tooltip, Box, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DatePicker, TableBy } from "../../../components";
import { NewTransactionForm } from "../../../services/forms";
import { WidgetLayout, PageLayout } from "../../layout";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTransactions,
  fetchCategories,
} from "../../../store/ActionCreators";
import { style } from "./TransactionsPage.style";

const TransactionsPage = () => {
  const dispatch = useDispatch();
  const activeDate = useSelector(
    (state) => state.transactionsReducer.activeDate
  );
  // switch type table
  const [tableType, setTableType] = useState("payments");
  const handleTableSwitch = () => {
    setTableType((tableType) =>
      tableType === "category" ? "payments" : "category"
    );
  };

  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  useEffect(() => {
    dispatch(fetchTransactions(activeDate));
    dispatch(fetchCategories());
  }, [activeDate, handleModalClose]);

  return (
    <PageLayout
      menuBar={
        <>
          <DatePicker />
          <Tooltip title={tableType}>
            <Switch onChange={handleTableSwitch} color="primary" />
          </Tooltip>

          <Button
            onClick={handleModalOpen}
            variant="contained"
            sx={style.button}
          >
            <AddIcon />
            Додати
          </Button>
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={style.modal}>
              <NewTransactionForm handler={handleModalClose} />
            </Box>
          </Modal>
        </>
      }
      components={
        <WidgetLayout>
          <TableBy type={tableType} />
        </WidgetLayout>
      }
    />
  );
};

export default TransactionsPage;
