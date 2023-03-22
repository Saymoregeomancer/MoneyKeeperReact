import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState } from "react";
import DeleteElement from "../../utils/DeleteElement";
import WritebleSwitcher from "../../utils/WritebleSwitcher";
import { request } from "../../../../services/request.service";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../../store/ActionCreators";
import useForm from "../../utils/useForm.hook";
import Inputs from "../../utils/Inputs";
import { style } from "./CategoryChangerForm.style";
import apiConfig from "../../../../config/api.json";

const CategoryChangerForm = ({ category = [] }) => {
  const dispatch = useDispatch();

  const fields = [
    {
      name: "label",
      type: "text",
      required: "true",
      value: category.label,
    },
    {
      name: "limit",
      type: "number",
      required: "true",
      value: category.limit,
    },
  ];

  const { form, formErrors, handleInputChange } = useForm(fields);

  const [categoryWriteble, setCategoryWriteble] = useState(false);

  const writebleHendler = () => {
    setCategoryWriteble(!categoryWriteble);
  };

  const saveFunction = async () => {
    const { url, method, headers, token } = apiConfig.UpdateCategory;
    const response = await request({
      url,
      method,
      body: {
        ...form,
        id: category.id,
      },
      headers,
      token,
    });
    dispatch(fetchCategories());
  };

  const removeFunction = async () => {
    const { url, method, headers, token } = apiConfig.RemoveCategory;
    const response = await request({
      url,
      method,
      body: { id: category.id },
      headers,
      token,
    });
    dispatch(fetchCategories());
  };

  const elementsTypeChanger = (bool, form) => {
    if (bool === false) {
      return (
        <>
          <Typography sx={style.typography}>{form.label}</Typography>
          <Typography sx={style.typography}>{form.limit}</Typography>
        </>
      );
    }

    return (
      <Inputs
        fields={fields}
        form={form}
        formError={formErrors}
        inputHandler={handleInputChange}
        customStyle={style.textField}
      />
    );
  };

  return (
    <Box sx={style.elementEditor}>
      <Box className={"qwe"} sx={style.categoryForm}>
        {elementsTypeChanger(categoryWriteble, form)}
      </Box>
      <Box sx={style.buttonWrap}>
        <WritebleSwitcher
          saveFunction={saveFunction}
          switchFunction={writebleHendler}
        />
        <DeleteElement
          removeFunction={removeFunction}
          title={
            "Користуватись варто коли випадково створили непотрібну категорію. Видаляти категорії які вже використовувалися не варто"
          }
        />
      </Box>
    </Box>
  );
};

export default CategoryChangerForm;
