import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../../../store/ActionCreators";
import { style } from "./SingUpForm.style";
import useForm from "../../utils/useForm.hook";
import Inputs from "../../utils/Inputs";
import apiConfig from "../../../../config/api.json";
import ButtonForm from "../../utils/ButtonForm";
import { Fade, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const fields = [
  {
    name: "email",
    label: "Email",
    type: "text",
    required: "true",
  },
  {
    name: "password",
    label: "Password",
    type: "text",
    required: "true",
  },
  {
    name: "repeatPassword",
    label: "Repeat password",
    type: "text",
    required: "true",
  },
];

const { url, method, headers, token } = apiConfig.SingUp;

const SingUpForm = () => {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const { data, loading, errors } = useSelector((state) => state.authReducer);

  const {
    form,
    formErrors,
    clearForm,
    handleInputChange,
    validateInputs,
    addFormError,
    addResponseFormError,
  } = useForm(fields);

  const handleButton = async () => {
    if (form.password !== form.repeatPassword) {
      addFormError("password", "Поля мають збігатися");
      addFormError("repeatPassword", "Поля мають збігатися");
      return;
    }

    if (!validateInputs()) {
      return;
    }

    dispatch(fetchAuth({ url, method, body: { ...form }, headers, token }));

    if (!formErrors) {
      setMessage("Користувача створено");
      clearForm();
    }
  };

  useEffect(() => {
    if (errors) {
      addResponseFormError(errors);
    }
  }, [errors]);

  return (
    <Box sx={style.wrap}>
      <Inputs
        fields={fields}
        form={form}
        formError={formErrors}
        inputHandler={handleInputChange}
      />
      <Fade in={!!message}>
        <Typography sx={style.success}>{message}</Typography>
      </Fade>
      <ButtonForm
        onClick={handleButton}
        loading={loading}
        isCompleted={!!data}
        sx={style.sendForm}
        defaultTitle="Створити"
      />
    </Box>
  );
};

export default SingUpForm;
