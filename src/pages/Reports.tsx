import { FC } from "react";
import EmptyState from "./reports/EmptyState";
import Filters from "./reports/Filters";

const Reports: FC = () => {
  return (
    <>
      <Filters />
      <EmptyState />
    </>
  );
};

export default Reports;
