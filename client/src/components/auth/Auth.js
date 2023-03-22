import { SingInForm, SingUpForm } from "../../services/forms";
import { Box, Typography, Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import { style } from "./Auth.style";
import { checkToken } from "../../store/ActionCreators";
import { useDispatch } from "react-redux";
import { authSlice } from "../../store/slices/authSlice";

const Auth = () => {
  const dispatch = useDispatch();

  const [formType, setFormType] = useState("singin");

  const onSetSingUp = () => {
    setFormType("singup");
    dispatch(authSlice.actions.clearError());
  };
  const onSetSingIn = () => {
    setFormType("singin");
    dispatch(authSlice.actions.clearError());
  };

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  return (
    <Box sx={style.wrap}>
      <Box>
        <Typography
          onClick={onSetSingIn}
          sx={style.text}
          className={formType === "singin" ? "active" : null}
        >
          Sing In
        </Typography>
        <Typography
          onClick={onSetSingUp}
          sx={style.text}
          className={formType === "singup" ? "active" : null}
        >
          Sing Up
        </Typography>
      </Box>

      <Collapse
        orientation="vertical"
        collapsedSize={0}
        unmountOnExit
        in={formType === "singin" ? true : false}
      >
        <SingInForm />
      </Collapse>
      <Collapse
        unmountOnExit
        orientation="vertical"
        in={formType === "singup" ? true : false}
      >
        <SingUpForm />
      </Collapse>
    </Box>
  );
};

export default Auth;
