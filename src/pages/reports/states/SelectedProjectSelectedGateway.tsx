import { FC, useEffect, useState } from "react";
import ReportsContainer from "../ReportsContainer";
import Table from "../../../ui/Table";
import SummedUpReportAmount from "../SummedUpReportAmount/SummedUpReportAmount";
import { useReports } from "../../../store";
import ReportTableRow from "../report-table-row/ReportTableRow";
import makeTableRowsFromReports from "../report-table-row/make-table-rows-from-reports";
import FormattedDate from "../../../date/FormattedDate";
import FormattedMoney from "../../../money/FormattedMoney";

const SelectedProjectSelectedGateway: FC = () => {
  const tableHeaders = ["Date", "Transaction Id", "Amount"];
  const reports = useReports((state) => state.reports);
  const [tableData, setTableData] = useState<ReportTableRow[]>([]);

  useEffect(() => {
    if (reports && reports.length) {
      setTableData(makeTableRowsFromReports(reports));
    }
  }, [reports]);

  return (
    <>
      <ReportsContainer>
        {tableData.length ? (
          <Table>
            <>
              <tr>
                {tableHeaders.map((header) => (
                  <td key={header}>{header}</td>
                ))}
              </tr>
              {tableData.map((row) => {
                return (
                  <tr key={row.paymentId}>
                    <td>
                      <FormattedDate isoString={row.date} />
                    </td>
                    <td>{row.paymentId}</td>
                    <td>
                      <FormattedMoney amount={row.amount} />
                    </td>
                  </tr>
                );
              })}
            </>
          </Table>
        ) : null}
      </ReportsContainer>
      <SummedUpReportAmount />
    </>
  );
};

export default SelectedProjectSelectedGateway;
