import { FC, useState, useEffect, useMemo } from "react";
import ReportsContainer from "../ReportsContainer";
import SummedUpReportAmount from "../SummedUpReportAmount/SummedUpReportAmount";
import { useReports, useProjects, useGateways } from "../../../store";
import groupReportsBy from "../group-reports-by";
import ReportsAccordion, { ReportsSummary } from "../ReportsAccordion";
import getNameFromOptionList from "../../../ui/CustomSelect/get-name-from-option-list";
import sumUpReports from "../SummedUpReportAmount/sum-up-reports";
import formatMoney from "../../../money/format-money";
import formatDate from "../../../date/format-date";

const AllProjectsAllGateways: FC = () => {
  const reports = useReports((state) => state.reports);
  const projects = useProjects((state) => state.projects);
  const gateways = useGateways((state) => state.gateways);
  const tableHeaders = useMemo(
    () => ["Date", "Gateway", "Transaction Id", "Amount"],
    []
  );
  const [allReportsGroupedByProject, setAllReportsGroupedByProject] = useState<
    ReportsSummary[]
  >([]);

  useEffect(() => {
    if (projects && gateways && reports && reports.length) {
      const reportsByProject = groupReportsBy(reports, "projectId");
      const summarizedReports = Object.keys(reportsByProject).map(
        (id: string): ReportsSummary => {
          const summary = {
            groupId: id,
            groupName: getNameFromOptionList(id, projects),
            summarizedAmount: formatMoney(sumUpReports(reportsByProject[id])),
            reportRows: reportsByProject[id].map((report) => [
              formatDate(report.created),
              getNameFromOptionList(report.gatewayId, gateways) as string,
              report.paymentId,
              formatMoney(report.amount),
            ]),
          };

          summary.reportRows.unshift(tableHeaders);

          return summary;
        }
      );
      setAllReportsGroupedByProject(summarizedReports);
    }
  }, [reports, gateways, projects, tableHeaders]);

  return (
    <>
      <ReportsContainer>
        {allReportsGroupedByProject && allReportsGroupedByProject.length ? (
          <ReportsAccordion reports={allReportsGroupedByProject} />
        ) : null}
      </ReportsContainer>
      <SummedUpReportAmount />
    </>
  );
};

export default AllProjectsAllGateways;
