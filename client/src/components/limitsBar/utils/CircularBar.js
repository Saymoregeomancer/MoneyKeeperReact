import { useState } from "react";
import * as React from "react";
import { Typography, Grow } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { style } from "./CircularBar.styles";


const getSimplePercent = (percent) => {
  return percent > 100 ? 100 : percent
}


const setColor = (percent) => {
  let currentPercent = getSimplePercent(percent);
  switch (true) {
    case currentPercent === 100:
      return style.max;
    case currentPercent > 90:
      return style.warning;
    default:
      return style.min;
  }
};

const CircularBar = ({ percent = 0, title = "Bankomat" }) => {
  const [isHover, setIsHover] = useState(false);

  let color = setColor(percent);
  let roundedPercent = Math.round(percent);

  return (
    <Box
      sx={style.wrap}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CircularProgress
        sx={{ ...style.progres, ...color }}
        size={style.progres.size}
        variant="determinate"
        value={getSimplePercent(percent)}
      />

      <Box sx={style.growWrap}>
        <Grow in={!isHover}>
          <Typography sx={style.titleLabel}>{title}</Typography>
        </Grow>
        <Grow in={isHover} appear={false}>
          <Typography
            sx={{ ...style.titlePercent, ...color }}
          >{`${roundedPercent}%`}</Typography>
        </Grow>
      </Box>
    </Box>
  );
};

export default CircularBar;
