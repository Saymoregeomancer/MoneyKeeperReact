import { ThemeProvider, Box } from "@mui/material";
import AppRouter from "./routers/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { theme, style } from "./config/theme";
import { useSelector } from "react-redux";

const pages = [
  { page: "Транзакції", icon: "", pageUrl: "transactions" },
  { page: "Звіт", icon: "", pageUrl: "reports" },
  { page: "Налаштування", icon: "", pageUrl: "settings" },
];

function App() {

  const {isValidToken} = useSelector(state=> state.authReducer)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={style}>
          <AppRouter isAuth={isValidToken}/>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
