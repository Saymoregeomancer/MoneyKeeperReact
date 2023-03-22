export const style = {
    pageWrap: {
      padding: 1,
      width: "100%",
    },
    header: {
      menuBar: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        p: 1,
        borderBottom: 2,
        borderColor: "grey.300",
        minHeight: "2.5rem",
      },
      locationTitle: {
        fontWeight: "700",
        fontSize: {
          sm: "1.2rem",
          md: "1.5rem",
          ":first-letter": {
            textTransform: "uppercase",
          },
        },
      },
      componentsWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minWidth: {
          md: "20em",
          sm: "27rem",
        },
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
    },
    componentsWrap: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "grey.50",
        borderRadius: 3,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "primary.main",
        borderRadius: 3,
      },
    },
  };