import { FC, useEffect } from "react";
import Empty from "./reports/states/Empty";
import Filters from "./reports/Filters";
import {
  useGatewayOptions,
  useProjectOptions,
  useReports,
  useFilters,
} from "../store";
import AllProjectsAllGateways from "./reports/states/AllProjectsAllGateways";
import SelectedProjectAllGateways from "./reports/states/SelectedProjectAllGateways";
import SelectedGatewayAllProjects from "./reports/states/SelectedGatewayAllProjects";
import SelectedProjectSelectedGateway from "./reports/states/SelectedProjectSelectedGateway";
import Loading from "./reports/states/Loading";

const Reports: FC = () => {
  const fetchProjectOptionsError = useProjectOptions((state) => state.error);
  const fetchProjectOptions = useProjectOptions((state) => state.fetch);
  const selectedProjectOption = useProjectOptions((state) => state.selected);

  const fetchGatewayOptions = useGatewayOptions((state) => state.fetch);
  const fetchGatewayOptionsError = useGatewayOptions((state) => state.error);
  const selectedGatewayOption = useGatewayOptions((state) => state.selected);

  const filtersTouched = useFilters((state) => state.isTouched);

  const reports = useReports((state) => state.reports);
  const reportsLoading = useReports((state) => state.isLoading);

  useEffect(() => {
    fetchProjectOptions();
  }, [fetchProjectOptions]);

  useEffect(() => {
    fetchGatewayOptions();
  }, [fetchGatewayOptions]);

  useEffect(() => {
    if (fetchProjectOptionsError !== null) {
      throw new Error(fetchProjectOptionsError);
    }
  }, [fetchProjectOptionsError]);

  useEffect(() => {
    if (fetchGatewayOptionsError !== null) {
      throw new Error(fetchGatewayOptionsError);
    }
  }, [fetchGatewayOptionsError]);

  return (
    <>
      <Filters />
      {!reportsLoading && !filtersTouched ? <Empty /> : null}

      {!reportsLoading && reports && !reports.length && filtersTouched ? (
        <Empty explanation="No reports found with these parameters!" />
      ) : null}

      {!reportsLoading &&
      reports &&
      reports?.length &&
      !selectedGatewayOption &&
      !selectedProjectOption ? (
        <AllProjectsAllGateways />
      ) : null}

      {!reportsLoading &&
      reports &&
      reports?.length &&
      selectedProjectOption &&
      !selectedGatewayOption ? (
        <SelectedProjectAllGateways />
      ) : null}

      {!reportsLoading &&
      reports &&
      reports?.length &&
      !selectedProjectOption &&
      selectedGatewayOption ? (
        <SelectedGatewayAllProjects />
      ) : null}

      {!reportsLoading &&
      reports &&
      reports?.length &&
      selectedProjectOption &&
      selectedGatewayOption ? (
        <SelectedProjectSelectedGateway />
      ) : null}

      {reportsLoading && <Loading />}
    </>
  );
};

export default Reports;
