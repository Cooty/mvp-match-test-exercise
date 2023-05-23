import { FC, useEffect } from "react";
import EmptyState from "./reports/EmptyState";
import Filters from "./reports/Filters";
import { useGatewayOptions, useProjectOptions } from "../store";

const Reports: FC = () => {
  const fetchProjectOptionsError = useProjectOptions((state) => state.error);
  const fetchProjectOptions = useProjectOptions((state) => state.fetch);

  const fetchGatewayOptions = useGatewayOptions((state) => state.fetch);
  const fetchGatewayOptionsError = useGatewayOptions((state) => state.error);

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
      <EmptyState />
    </>
  );
};

export default Reports;
