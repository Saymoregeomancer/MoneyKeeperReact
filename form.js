// import { useState } from "react";

// const useForm = (fields) => {
//   let initialState = {};
//   fields.forEach((field) => {
//     initialState[field.name] = field.value ? field.value : "";
//   });

//   const [form, setForm] = useState(initialState);
//   const [formErrors, setFormErrors] = useState({});

//   const validateInputs = () => {
//     let errors = {};
//     let hasErrors = false;

//     Object.keys(form).forEach((key) => {
//       let requiredField = false;
//       fields.forEach((field) => {
//         if (field.name === key && field.required) {
//           requiredField = true;
//         }
//       });
//       if (!form[key] && requiredField) {
//         errors[key] = "Заповніть поле";
//         hasErrors = true;
//       }
//     });

//     setFormErrors(errors);
//     return !hasErrors;
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     setFormErrors((prev) => ({ ...prev, [name]: null }));
//   };

//   const clearForm = () => {
//     setForm(initialState);
//     setFormErrors({});
//   };

//   const changeState = (name, value) => {
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const addFormError = (fieldName, errorMessage) => {
//     setFormErrors((prev) => ({ ...prev, [fieldName]: errorMessage }));
//   };
//   const addResponseFormError = (errors) => {
//     errors.forEach((error) => {
//       addFormError(error.param, error.msg);
//     });
//   };

//   return {
//     form,
//     formErrors,
//     validateInputs,
//     handleInputChange,
//     clearForm,
//     addFormError,
//     addResponseFormError,
//     changeState,
//   };
// };

// export default useForm;








import { SingInForm, SingUpForm } from "../forms";
import { Box, Typography, Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import { style } from "./Auth.style";

const Auth = () => {
  const [formType, setFormType] = useState("singin");
  const [open, setOpen] = useState(true);
  const onSetSingUp = () => {
    setFormType("singup");
    setTimeout(() => setOpen(!open), 1000);
  };
  const onSetSingIn = () => {
    setFormType("singin");
    setTimeout(() => setOpen(!open), 1000);
  };

  console.log(open);

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
        in={formType === "singin" ? true : false}
      >
        {open ? <SingInForm /> : null}
      </Collapse>
      <Collapse
        orientation="vertical"
        in={formType === "singup" ? true : false}
      >
        {!open ? <SingUpForm /> : null}
      </Collapse>
    </Box>
  );
};

export default Auth;
