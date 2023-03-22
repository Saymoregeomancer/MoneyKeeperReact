import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { request } from "../../../../services/request.service";
import { fetchCategories } from "../../../../store/ActionCreators";
import { useDispatch } from "react-redux";
import useForm from "../../utils/useForm.hook";
import Inputs from "../../utils/Inputs";
import { style } from "./NewCategoryForm.style";
import apiConfig from "../../../../config/api.json";

const fields = [
  {
    name: "categoryLabel",
    label: "Категорія",
    type: "text",
    required: "true",
  },
  {
    name: "categoryLimit",
    label: "Ліміт",
    type: "number",
    required: "true",
  },
];

const { url, method, header, token } = apiConfig.CreateCategories;

const NewCategoryForm = () => {
  const dispatch = useDispatch();

  const { form, formErrors, clearForm, handleInputChange, validateInputs } =
    useForm(fields);

  const buttonHandler = async () => {
    if (validateInputs()) {
      await request({
        url,
        method,
        body: {
          label: form.categoryLabel,
          limit: form.categoryLimit,
        },
        header,
        token,
      });
      dispatch(fetchCategories());
      clearForm();
    }
  };

  return (
    <Box sx={style.wrap}>
      <Box>
        <Inputs
          fields={fields}
          form={form}
          formError={formErrors}
          inputHandler={handleInputChange}
        />

        <Button
          variant="contained"
          sx={style.sendForm}
          onClick={() => buttonHandler()}
        >
          Створити
        </Button>
      </Box>
    </Box>
  );
};

export default NewCategoryForm;
