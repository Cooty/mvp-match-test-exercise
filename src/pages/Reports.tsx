import { FC, useEffect } from "react";
import Empty from "./reports/states/Empty";
import Filters from "./reports/Filters";
import { useGateways, useProjects, useReports, useFilters } from "../store";
import AllProjectsAllGateways from "./reports/states/AllProjectsAllGateways";
import SelectedProjectAllGateways from "./reports/states/SelectedProjectAllGateways";
import SelectedGatewayAllProjects from "./reports/states/SelectedGatewayAllProjects";
import SelectedProjectSelectedGateway from "./reports/states/SelectedProjectSelectedGateway";
import Loading from "./reports/states/Loading";

const Reports: FC = () => {
  const fetchProjectOptionsError = useProjects((state) => state.error);
  const fetchProjectOptions = useProjects((state) => state.fetch);
  const selectedProjectId = useProjects((state) => state.selectedId);

  const fetchGatewayOptions = useGateways((state) => state.fetch);
  const fetchGatewayOptionsError = useGateways((state) => state.error);
  const selectedGatewayId = useGateways((state) => state.selectedId);

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
      !selectedGatewayId &&
      !selectedProjectId ? (
        <AllProjectsAllGateways />
      ) : null}

      {!reportsLoading &&
      reports &&
      reports?.length &&
      selectedProjectId &&
      !selectedGatewayId ? (
        <SelectedProjectAllGateways />
      ) : null}

      {!reportsLoading &&
      reports &&
      reports?.length &&
      !selectedProjectId &&
      selectedGatewayId ? (
        <SelectedGatewayAllProjects />
      ) : null}

      {!reportsLoading &&
      reports &&
      reports?.length &&
      selectedProjectId &&
      selectedGatewayId ? (
        <SelectedProjectSelectedGateway />
      ) : null}

      {reportsLoading && <Loading />}
    </>
  );
};

export default Reports;
