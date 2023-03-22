export const style = {
  wrap: {
    position: "relative",
    display: "inline-flex",
  },
  progres: {
    size: "6.1rem",
    "& svg": {
      borderRadius: "100%",
      backgroundColor: "grey.200",
    },
  },

  growWrap: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  titleLabel: {
    position: "absolute",
    color: "grey.500",
    fontSize: "0.85rem",
    fontWeight: "700",
    textShadow: "0px 0px 4px primary.main",
  },
  titlePercent: {
    color: "primary.main",
    fontSize: "1.1rem",
    position: "absolute",
    p: "1px",
    fontSize: "1.2rem",
    fontWeight: "700",
    textShadow: "0px 0px 4px primary.main",
  },
  min: {
    color: "primary.main",
  },
  warning: {
    color: "warning.light",
  },
  max: {
    color: "error.light",
  },
};
