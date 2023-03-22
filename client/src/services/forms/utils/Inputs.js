import { useEffect } from "react";
import { TextField, Tooltip } from "@mui/material";
const style = {
  tooltip: {
    backgroundColor: "red",
    "& .MuiTooltip-tooltip": {
      marginTop: "80px !important",
      color: "red",
    },
  },

  input: { backgroundColor: "background.paper", px: "2px" },
  textField: { mt: 1, backgroundColor: "background.paper", width: "100%" },
};

const Inputs = ({
  fields,
  form,
  formError,
  inputHandler,
  customStyle = {},
}) => {
  return (
    <>
      {fields.map((field) => {
        return (
          <Tooltip
            arrow
            leaveDelay={1000}
            sx={style.tooltip}
            open={!!formError[field.name]}
            title={formError[field.name]}
            key={field.name}
          >
            <TextField
              id={field.name}
              label={field.label || null}
              name={field.name}
              required={field.required ? true : false}
              error={!!formError[field.name]}
              value={form[field.name]}
              type={field.type}
              sx={{ ...style.textField, ...customStyle }}
              onChange={inputHandler}
            />
          </Tooltip>
        );
      })}
    </>
  );
};

export default Inputs;
