import { FC, useMemo, useState, useEffect } from "react";
import ReportsContainer from "../ReportsContainer";
import TwoColumnContent from "../../../layout/TwoColumnContent";
import Chart from "../chart/Chart";
import ReportsAccordion, { ReportsSummary } from "../ReportsAccordion";
import groupReportsBy from "../group-reports-by";
import sumUpReports from "../SummedUpReportAmount/sum-up-reports";
import getNameFromOptionList from "../../../ui/CustomSelect/get-name-from-option-list";
import { useReports, useProjects } from "../../../store";
import formatMoney from "../../../money/format-money";
import formatDate from "../../../date/format-date";
import SummedUpReportAmount from "../SummedUpReportAmount/SummedUpReportAmount";

const SelectedGatewayAllProjects: FC = () => {
  const tableHeaders = useMemo(() => ["Date", "Transaction Id", "Amount"], []);
  const [projectNames, setProjectNames] = useState<string[]>([]);
  const [summarizedAmounts, setSummarizedAmounts] = useState<number[]>([]);
  const reports = useReports((state) => state.reports);
  const projects = useProjects((state) => state.projects);
  const [reportsGroupedByProject, setReportsGroupedByProject] = useState<
    ReportsSummary[]
  >([]);

  useEffect(() => {
    if (projects && reports && reports.length) {
      const reportsByProject = groupReportsBy(reports, "projectId");
      const summedUpAmounts: number[] = [];
      const summarizedReports = Object.keys(reportsByProject).map(
        (id: string): ReportsSummary => {
          const summedUpAmount = sumUpReports(reportsByProject[id]);
          const summary = {
            groupId: id,
            groupName: getNameFromOptionList(id, projects),
            summarizedAmount: formatMoney(summedUpAmount),
            reportRows: reportsByProject[id].map((report) => [
              formatDate(report.created),
              report.paymentId,
              formatMoney(report.amount),
            ]),
          };
          summedUpAmounts.push(summedUpAmount);
          summary.reportRows.unshift(tableHeaders);

          return summary;
        }
      );
      const projectNames = summarizedReports.map(
        (report) => report.groupName + ""
      );
      setProjectNames(projectNames);
      setSummarizedAmounts(summedUpAmounts);
      setReportsGroupedByProject(summarizedReports);
    }
  }, [reports, projects, tableHeaders]);

  return (
    <TwoColumnContent>
      <>
        <ReportsContainer>
          {reportsGroupedByProject && reportsGroupedByProject.length ? (
            <ReportsAccordion reports={reportsGroupedByProject} />
          ) : null}
        </ReportsContainer>
        <Chart
          summary={<SummedUpReportAmount label="Gateway Total" />}
          labels={projectNames}
          data={summarizedAmounts}
          toolTipLabel="Amount per project"
        />
      </>
    </TwoColumnContent>
  );
};

export default SelectedGatewayAllProjects;
