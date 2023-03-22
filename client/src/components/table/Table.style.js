import { keyframes } from "@mui/material";
const tableAnimation = keyframes`
0% {opacity:0;}
100% {opacity:1;}

`;

export const style = {
  tableContainer: {
    pt: 0,
    width: "100%",
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
    animation: `${tableAnimation} 3s`,
  },
  tableWrap: {
    height: "72vh",
    minWidth: {
      sm: "25rem",
      md: "30rem",
    },
    pr: 1,
    animation: `${tableAnimation} 0.5s`,
  },
  stack: {
    animation: `${tableAnimation} 0.5s`,
  },

  tableSkeleton: {
    minWidth: {
      sm: "25rem",
      md: "30rem",
    },
    my: 1,
    height: "2rem",
  },
  errorText: {
    animation: `${tableAnimation} 0.5s`,
    mt: 3,
    minWidth: {
      sm: "25rem",
      md: "30rem",
    },
    fontSize: "1.5rem",
    textAlign: "center",
  },
};
