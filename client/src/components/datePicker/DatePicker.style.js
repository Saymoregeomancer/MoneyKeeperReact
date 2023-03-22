export const style = {
  container: {
    p: "2px",
    mr: 1,
    backgroundColor: "grey.200",
    display: "flex",
    borderRadius: 2,
    justifyContent: "center",
  },
  button: {
    fontSize: "14px",
    p: {
      sm: "9px 5px",
      md: "10px 5px",
    },
    color: "grey.500",
    cursor: "pointer",
    fontWeight: "700",
    textShadow: "0px 0px 4px primary.main",
    userSelect: "none",
    border: "0px",
    backgroundColor: "rgba(0,0,0,0)",
    filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.1))",
    "&:nth-of-type(even)": {
      mx: 1,
    },
    "&.active": {
      backgroundColor: "grey.50",
      borderRadius: 2,
      color: "primary.main",
      filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.1))",
    },
  },
};
