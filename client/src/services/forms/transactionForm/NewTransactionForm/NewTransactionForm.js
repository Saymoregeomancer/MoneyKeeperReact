import { Box } from "@mui/system";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getCurrentDate } from "../../../../utils/date.utils";
import { request } from "../../../request.service";
import useForm from "../../utils/useForm.hook";
import Inputs from "../../utils/Inputs";
import { fetchTransactions } from "../../../../store/ActionCreators";
import apiConfig from "../../../../config/api.json";
import {style} from './NewTransactionForm.style'


const { url, method, headers, token } = apiConfig.CreateTransaction;

const fields = [
  {
    name: "categoryId",
    label: "Категорія",
    type: "text",
    required: "true",
  },
  {
    name: "value",
    label: "Сумма",
    type: "number",
    required: "true",
  },
  {
    name: "note",
    label: "Примітка",
    type: "text",
  },
];

const NewTransactionForm = ({ handler }) => {
  const inputFields = [fields[1], fields[2]];
  const selectField = fields[0];

  const { form, formErrors, clearForm, handleInputChange, validateInputs } =
    useForm(fields);

  const { categories } = useSelector((state) => state.categoriesReducer);

  const onButtonHandler = async () => {
    if (validateInputs()) {
      let date = getCurrentDate();
      await request({ url, method, body: { ...form, date }, headers, token });
      clearForm();
      fetchTransactions();
      handler();
    }
  };

  return (
    <Box sx={style.wrap}>
      <FormControl required sx={{ mt: 1 }} fullWidth>
        <InputLabel sx={style.input} id="category-select-form">
          Категорія
        </InputLabel>
        <Select
          error={!!formErrors[selectField.name]}
          name={selectField.name}
          labelId={selectField.name}
          id={selectField.name}
          value={form.categoryId}
          label={selectField.label}
          onChange={handleInputChange}
        >
          {categories.map(({ id, label }) => {
            return (
              <MenuItem key={id} value={id}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Inputs
        fields={inputFields}
        form={form}
        formError={formErrors}
        inputHandler={handleInputChange}
      />

      <Button variant="contained" sx={style.sendForm} onClick={onButtonHandler}>
        Створити
      </Button>
    </Box>
  );
};

export default NewTransactionForm;
