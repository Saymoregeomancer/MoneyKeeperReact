import { createTheme, keyframes } from "@mui/material";

const pagesAnimation = keyframes`
    0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
    100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
  }`;

const theme = createTheme({
  palette: {
    background: {
      paper: "#F9F9F9",
      white: "white",
    },
    primary: {
      main: "#2DB84C",
      light: "#57c66f",
    },
    secondary: {
      main: "#F0FDF8",
      light: "#57c66f",
    },
    light: {
      main: "#2DB84C",
      red: "red",
    },
  },
  animation: {
    page: {
      animation: `${pagesAnimation} 0.5s both`,
    },
  },

  cal: {
    rot: {
      red: "red",
      green: "green",
    },
  },

  // palette: {
  //   background: {
  //     paper: "#4B4453",
  //     default: "#4B4453",
  //   },
  //   primary: {
  //     main: "#B0A8B9",
  //     light: "#C34A36",
  //   },
  //   secondary: {
  //     main: "#845EC2",
  //     light: "#FF8066",
  //   },
  // },
});

const style = {
  width: "98%",
  mx: "auto",
  my: "1.5vh",
  height: "95vh",
  backgroundColor: "background.paper",
  borderRadius: "30px",
  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)",
  display: "flex",
  pr: 2,
  justifyContent: "space-between",
};

export { style, theme };
