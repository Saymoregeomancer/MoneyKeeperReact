import { Box, Collapse } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { style } from "./PageLayout.style";

const PageLayout = ({ menuBar = null, components = null }) => {
  let location = useLocation().pathname.slice(1);

  const [isMount, setIsMount] = useState(true);

  useEffect(() => {
    return () => {
      setIsMount(false);
    };
  });

  // let animate = `${isMount ? openPage : closePage} 0.5s both `;
  return (
    <Box sx={style.pageWrap}>
      {/* <Collapse collapsedSize={0} orientation="horizontal" in={isMount}> */}
      <Box component="div" sx={style.header.menuBar}>
        <Box sx={style.header.locationTitle} component="span">
          {location}
        </Box>
        <Box sx={style.header.componentsWrap}>{menuBar}</Box>
      </Box>

      <Box sx={style.componentsWrap}>{components}</Box>
      {/* </Collapse> */}
    </Box>
  );
};

export default PageLayout;
