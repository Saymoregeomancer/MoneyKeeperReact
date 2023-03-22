import { Box } from "@mui/system";
import { style } from "./WidgetLayout.style";
import { Typography } from "@mui/material";

const WidgetLayout = ({ wrapStyle = {}, header = null, children = null }) => {
  return (
    <Box sx={{ ...style.widget, ...wrapStyle }}>
      {header && <Typography sx={style.widgetHeader}>{header}</Typography>}
      {children && <Box>{children}</Box>}
    </Box>
  );
};

export default WidgetLayout;
