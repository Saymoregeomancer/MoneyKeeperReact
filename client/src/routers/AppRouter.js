import { Routes, Route } from "react-router-dom";
import { NavigationLayout } from "../views/layout";
import {
  AuthPage,
  ReportsPage,
  SettingsPage,
  TransactionsPage,
} from "../views/pages";
import { pages } from "../config/pages";

const AppRouter = ({ isAuth }) => {
  if (!isAuth) {
    return (
      <Routes>
        <Route path="/*" element={<AuthPage />} />
      </Routes>
    );
  }

  return (
    <>
      <NavigationLayout />
      <Routes>
        <Route exact path="/transactions" element={<TransactionsPage />} />
        <Route exact path="/reports" element={<ReportsPage />} />
        <Route exact path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
};
export default AppRouter;
