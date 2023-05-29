import Report from "../interfaces/Report";

function sumUpReports(reports: Report[]) {
  const amounts = reports.map((report) => report.amount);
  return amounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

export default sumUpReports;
