import { NewCategoryForm, CategoryChangerForm } from "../../services/forms";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { style } from "./CategoryEditor.style";

const CategoryEditor = () => {
  const { categories } = useSelector((state) => state.categoriesReducer || []);

  return (
    <Box sx={style.wrap}>
      <Box sx={style.editorFormWrap}>
        <NewCategoryForm />
      </Box>
      <Box sx={style.editCategoryWrap}>
        <Box sx={style.categoryHeader}>
          <Typography sx={style.categoryTitle}>Категрія </Typography>
          <Typography sx={style.categoryTitle}> Ліміт</Typography>
        </Box>
        {categories.map((elem) => (
          <CategoryChangerForm key={elem.id} category={elem} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryEditor;
