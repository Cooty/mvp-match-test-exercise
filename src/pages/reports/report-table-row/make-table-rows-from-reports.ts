import Report from "../../../interfaces/Report";
import ReportTableRow from "./ReportTableRow";

function makeTableRowsFromReports(reports: Report[]) {
  return reports.map(
    (report) =>
      ({
        amount: report.amount,
        paymentId: report.paymentId,
        date: report.created,
      } as ReportTableRow)
  );
}

export default makeTableRowsFromReports;
