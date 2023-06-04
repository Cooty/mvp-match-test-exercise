import Report from "../../../interfaces/Report";
import ReportTableRow from "./ReportTableRow";

function makeTableRowsFromReports(reports: Report[], withGatewayId?: boolean) {
  return reports.map((report) => {
    const tableRow = {
      amount: report.amount,
      paymentId: report.paymentId,
      date: report.created,
    } as ReportTableRow;

    if (withGatewayId) {
      tableRow.gatewayId = report.gatewayId;
    }

    return tableRow;
  });
}

export default makeTableRowsFromReports;
