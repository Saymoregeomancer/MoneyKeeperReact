import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../../../store/ActionCreators";
import useForm from "../../utils/useForm.hook";
import Inputs from "../../utils/Inputs";
import { style } from "./SingInForm.style";
import apiConfig from "../../../../config/api.json";
import ButtonForm from "../../utils/ButtonForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const { url, method, headers, token } = apiConfig.SingIn;

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
];

const SingInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, errors, isValidToken } = useSelector(
    (state) => state.authReducer
  );

  const {
    form,
    formErrors,
    clearForm,
    handleInputChange,
    validateInputs,
    addResponseFormError,
  } = useForm(fields);

  useEffect(() => {
    if (!!errors) {
      addResponseFormError(errors);
      return;
    }
  }, [errors]);

  const handleButton = async () => {
    navigate("/transactions");
    if (!validateInputs()) {
      return;
    }

    dispatch(fetchAuth({ url, method, body: { ...form }, headers, token }));

    if (!formErrors) {
      clearForm();
    }
  };

  return (
    <Box sx={style.wrap}>
      <Inputs
        fields={fields}
        form={form}
        formError={formErrors}
        inputHandler={handleInputChange}
      />

      <Box sx={style.resetWrap}>
        <Box sx={style.passwordReset} component={"span"}>
          Forgot password?
        </Box>
      </Box>

      <ButtonForm
        onClick={handleButton}
        loading={loading}
        isCompleted={isValidToken}
        sx={style.sendForm}
        defaultTitle="Увійти"
      />
    </Box>
  );
};

export default SingInForm;
