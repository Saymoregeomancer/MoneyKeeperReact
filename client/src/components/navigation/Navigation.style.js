export const style = {
  appBar: { backgroundColor: "rgba(0,0,0,0)", boxShadow: 0 },
  toolBar: { mt: 1, flexDirection: "column" },
  img: { maxHeight: "60px" },
  navigationButton: {
    my: 2,
    color: "black",
    display: "block",
    fontSize: "16px",
    border: 1,
    borderRadius: 2,
    borderColor: "white",
    transitionDelay: "100ms",
    transitionProperty: "border",
    transitionDuration: "400ms",
    textTransform: "lowercase",
    ":first-letter": {
      textTransform: "uppercase",
    },
    "&.active": {
      color: "light.main",
      borderColor: "light.main",
      backgroundColor: "secondary.main",
    },
  },
};
