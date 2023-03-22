import { useState, useCallback } from "react";

const useForm = (fields) => {
  let initialState = {};
  fields.forEach((field) => {
    initialState[field.name] = field.value ? field.value : "";
  });

  const [form, setForm] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const validateInputs = () => {
    let errors = {};
    let hasErrors = false;

    Object.keys(form).forEach((key) => {
      let requiredField = false;
      fields.forEach((field) => {
        if (field.name === key && field.required) {
          requiredField = true;
        }
      });
      if (!form[key] && requiredField) {
        errors[key] = "Заповніть поле";
        hasErrors = true;
      }
    });

    setFormErrors(errors);
    return !hasErrors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  const clearForm = () => {
    setForm(initialState);
    setFormErrors({});
  };

  const changeState = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addFormError = (fieldName, errorMessage) => {
    setFormErrors((prev) => ({ ...prev, [fieldName]: errorMessage }));
  };
  const addResponseFormError = (errors) => {
    errors.forEach((error) => {
      addFormError(error.param, error.msg);
    });
  };

  return {
    form,
    formErrors,
    validateInputs,
    handleInputChange,
    clearForm,
    addFormError,
    addResponseFormError,
    changeState,
  };
};

export default useForm;
