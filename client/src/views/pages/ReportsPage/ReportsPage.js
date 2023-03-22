import { WidgetLayout, PageLayout } from "../../layout";
import { DatePicker, PieChart, BarChart, LimitsBar } from "../../../components";

const ReportsPage = () => {
  const menuBarComponents = (
    <>
      <DatePicker />
    </>
  );
  const mainPageComponents = (
    <>
      <WidgetLayout header={"Баланс"}>
        <BarChart />
      </WidgetLayout>

      <WidgetLayout header={"Розподіл"}>
        <PieChart />
      </WidgetLayout>
      <WidgetLayout header={"Ліміти"}>
        <LimitsBar />
      </WidgetLayout>
    </>
  );

  return (
    <PageLayout menuBar={menuBarComponents} components={mainPageComponents} />
  );
};

export default ReportsPage;
