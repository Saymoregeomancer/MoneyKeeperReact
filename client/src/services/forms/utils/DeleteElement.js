import { Box } from "@mui/system";
import { Popover, Button, Tooltip } from "@mui/material";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const style = {
  icon: { width: "1.2rem", p: 1, cursor: "pointer" },
  delete: {
    color: "error.main",
    alignItems: "top",
    display: "block",
  },
  deleteButton: {
    color: "error.light",
    fontSize: "11px",
  },
  deleteTitle: {
    height: "100px",
    fontSize: "10px",
    maxWidth: "50px",
  },
  deleteWrap: {
    display: "flex",
    alignItems: "top",
  },
};

const DeleteElement = ({
  removeFunction = null,
  title = "",
  customStyle = {},
}) => {
  const [anchorElement, setAnchorElement] = useState(null);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const open = Boolean(anchorElement);
  const id = open ? Math.random() : undefined;

  return (
    <Box sx={style.wrap}>
      <DeleteOutlineIcon
        aria-describedby={id}
        onClick={handleClick}
        sx={{ ...style.icon, ...style.delete, ...customStyle }}
      />

      <Popover
        id={id}
        open={open}
        sx={style.popover}
        anchorEl={anchorElement}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={style.deleteWrap}>
          <Tooltip sx={style.deleteTitle} placement="bottom" title={title}>
            <Button onClick={removeFunction} sx={style.deleteButton}>
              Видалити
            </Button>
          </Tooltip>
        </Box>
      </Popover>
    </Box>
  );
};

export default DeleteElement;
