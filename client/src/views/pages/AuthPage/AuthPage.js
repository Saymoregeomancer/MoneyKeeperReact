import { WidgetLayout } from "../../layout";
import { Auth } from "../../../components";

const AuthPage = ({}) => {
  return (
    <WidgetLayout wrapStyle={{ mx: "auto", my: 1 }}>
      <Auth />
    </WidgetLayout>
  );
};

export default AuthPage;
