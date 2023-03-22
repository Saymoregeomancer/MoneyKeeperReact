import { Box } from "@mui/system";
import { Collapse, Fade } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const style = {
  icon: {
    width: "1.1rem",
    p: 1,
    cursor: "pointer",
  },
  editButton: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
};

const WritebleSwitcher = ({ saveFunction = null, switchFunction }) => {
  const [open, setOpen] = useState(false);

  const writebleSwitcher = () => {
    setOpen(!open);
  };

  const close = () => {
    writebleSwitcher();
    switchFunction();
  };

  return (
    <Box sx={style.editButton}>
      <Collapse in={open}>
        <Box>
          <CheckIcon
            onClick={() => {
              saveFunction();
              close();
            }}
            sx={{ ...style.icon, color: "green" }}
          />
          <CloseIcon
            onClick={() => close()}
            sx={{ ...style.icon, color: "error.light" }}
          />
        </Box>
      </Collapse>

      <Collapse in={!open}>
        <EditIcon
          onClick={() => close()}
          sx={{ ...style.icon, color: "gray" }}
        />
      </Collapse>
    </Box>
  );
};

export default WritebleSwitcher;
