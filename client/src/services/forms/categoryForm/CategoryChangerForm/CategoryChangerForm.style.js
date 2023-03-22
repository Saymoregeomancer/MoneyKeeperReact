export const style = {
  elementEditor: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    minWidth: "17rem",
    alignItems: "center",
    "&:hover": {
      bgcolor: "secondary.main",
      borderRadius: "1px",
    },
  },

  categoryForm: {
    minWidth: "13rem",
    maxWidth: "14rem",
    display: "flex",
    justifyContent: "space-around",
  },

  textField: {
    mt: 0,
    width: "6.4rem",
    "& input": {
      p: "5px 0 5px 10px",
      height: "1.7rem",
    },
  },
  typography: {
    width: "5.75rem",
    height: "1.62rem",
    p: "5px 0 5px 9px",
    fontSize: "1rem",
    border: "1px solid rgba(0,0,0,0)",
  },
  buttonWrap: {
    display: "flex",
  },
};
