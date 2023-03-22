import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentDate,
  monthChanger,
  dateFormaterToType,
  getDateRangeArr,
} from "../../utils/date.utils";
import { setActiveDate } from "../../store/ActionCreators";
import { style } from "./DatePicker.style";

const btnDisable = (current, active) => {
  return dateFormaterToType(current, "MM/YYYY") ===
    dateFormaterToType(active, "MM/YYYY")
    ? true
    : false;
};

const DatePicker = () => {
  const dispatch = useDispatch();

  const currentDate = getCurrentDate();
  useEffect(() => {
    dispatch(setActiveDate(currentDate));
  }, []);

  const activeDate = useSelector(
    (state) => state.transactionsReducer.activeDate
  );

  const onHendlerChanger = async (num) => {
    dispatch(setActiveDate(monthChanger(activeDate, -num)));
  };
  const monthArray = getDateRangeArr(activeDate, currentDate);

  return (
    <Box sx={style.container}>
      <Box
        component="button"
        onClick={() => onHendlerChanger(-1)}
        sx={style.button}
      >
        <span>{monthArray[0]}</span>
      </Box>
      <Box component="button" disabled className="active" sx={style.button}>
        <span>{monthArray[1]}</span>
      </Box>
      <Box
        disabled={btnDisable(currentDate, activeDate)}
        component="button"
        sx={style.button}
        onClick={() => onHendlerChanger(1)}
      >
        <span>{monthArray[2]}</span>
      </Box>
    </Box>
  );
};

export default DatePicker;
