import { PageLayout, WidgetLayout } from "../../layout";
import { CategoryEditor } from "../../../components";
import { fetchCategories } from "../../../store/ActionCreators";
import { useEffect } from "react";
const SettingsPage = () => {
  useEffect(() => {
    fetchCategories();
  }, []);

  const menuBarComponents = <></>;

  const mainPageComponents = (
    <>
      <WidgetLayout>
        <CategoryEditor />
      </WidgetLayout>
    </>
  );

  return (
    <PageLayout menuBar={menuBarComponents} components={mainPageComponents} />
  );
};

export default SettingsPage;
