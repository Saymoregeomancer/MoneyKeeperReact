const dayjs = require("dayjs");

const getCurrentDate = () => {
  return dayjs().format("DD/MM/YYYY");
};

const currentDate = getCurrentDate();

const rotateDateToMMDD = (date) => {
  let dateTransform = date === undefined ? getCurrentDate() : date;

  let arr = dateTransform.split("/");
  arr[0] = arr.splice(1, 1, arr[0])[0];
  let result = arr.join("/");

  return result;
};

const getMonthStartEnd = (date = undefined) => {
  return {
    monthFirstDay: dayjs(rotateDateToMMDD(date))
      .startOf("month")
      .format("DD/MM/YYYY"),
    monthtLastDay: dayjs(rotateDateToMMDD(date))
      .endOf("month")
      .format("DD/MM/YYYY"),
  };
};

const getMonthDaysRangeArray = (date = currentDate) => {
  let number = +getMonthStartEnd(date).monthtLastDay.split("/")[0];
  let monthArray = [];
  let numberMonth = dayjs(rotateDateToMMDD(date)).get("month");
  let numberYear = dayjs(rotateDateToMMDD(date)).get("year");
  for (let i = 1; i <= number; i++) {
    let day = `${numberMonth + 1}/${i}/${numberYear}`;
    monthArray.push(dayjs(day).format("DD/MM/YYYY"));
  }

  return monthArray;
};

const monthChanger = (
  date = currentDate,
  monthNumberChanger = 1,
) => {
  let ser = rotateDateToMMDD(date);

  return dayjs(ser).subtract(monthNumberChanger, "month").format("DD/MM/YYYY");
};

const dateFormaterToType = (date= currentDate, type = "DD/MM/YYYY") => {
  let ser = rotateDateToMMDD(date);
  return dayjs(ser).format(type);
};

const getDateRangeArr = (newDate, currentDate) => {
  let formattedNewDate = dateFormaterToType(newDate, "MM/YYYY");
  let formattedCurrentDate = dateFormaterToType(currentDate, "MM/YYYY");

  let dateRange = [];
  dateRange.push(dateFormaterToType(monthChanger(newDate, 1), "MM/YYYY"));
  dateRange.push(formattedNewDate);
  dateRange.push(
    formattedNewDate === formattedCurrentDate
      ? "Future ?"
      : dateFormaterToType(monthChanger(newDate, -1), "MM/YYYY")
  );

  return dateRange;
};

module.exports = {
  getCurrentDate,
  getMonthStartEnd,
  getMonthDaysRangeArray,
  monthChanger,
  rotateDateToMMDD,
  dateFormaterToType,
  getDateRangeArr
};

