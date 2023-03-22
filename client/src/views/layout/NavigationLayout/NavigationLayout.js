import { Box } from "@mui/material";
import { style } from "./NavigationLayout.style";
import {Navigation} from "../../../components";

const NavigationLayout = ({ navComponent }) => {
  return <Box sx={style}>{navComponent ? navComponent : <Navigation />}</Box>;
};

export default NavigationLayout;
