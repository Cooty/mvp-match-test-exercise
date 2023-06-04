import Report from "../../interfaces/Report";
import groupBy from "lodash.groupby";

type IDKeys = "projectId" | "gatewayId";

function groupReportsBy(reports: Report[], idKey: IDKeys) {
  return groupBy(reports, (report) => report[idKey]);
}

export default groupReportsBy;
