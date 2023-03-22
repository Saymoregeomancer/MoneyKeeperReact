import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/cat-mane.png";
import { style } from "./Navigation.style";

import pagesConfig from "../../config/pages.json";

const Navigation = ({ pages }) => {
  // const {  pages } = pagesConfig.pages;

  const navPages = pages ? pages : pagesConfig.pages;

  return (
    <AppBar sx={style.appBar} position="static">
      <Toolbar sx={style.toolBar}>
        <Box component="img" src={logo} sx={style.img} />
        <Box>
          {navPages.map(({ page, icon, pageUrl }) => (
            <Button
              key={pageUrl}
              fullWidth
              sx={style.navigationButton}
              component={NavLink}
              to={`/${pageUrl}`}
            >
              {page || pageUrl}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
