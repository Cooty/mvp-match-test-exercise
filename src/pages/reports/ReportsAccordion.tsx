import { FC, Fragment, useState, useEffect } from "react";
import classNames from "classnames";
import "./ReportsAccordion.scss";
import Table from "../../ui/Table";

export interface ReportsSummary {
  groupId: string;
  summarizedAmount: string;
  groupName?: string;
  reportRows: string[][];
}

interface Props {
  reports: ReportsSummary[];
}

const ReportsAccordion: FC<Props> = ({ reports }) => {
  const [openedGroupId, setOpenedGroupId] = useState("");

  useEffect(() => {
    setOpenedGroupId(reports[0].groupId);
  }, [reports]);

  return (
    <dl className="ReportsAccordion" data-current-opened-id={openedGroupId}>
      {reports.map((summarizedReportGroup: ReportsSummary) => {
        return (
          <Fragment key={summarizedReportGroup.groupId}>
            <dt
              className="ReportsAccordion__header"
              onClick={() => {
                setOpenedGroupId(summarizedReportGroup.groupId);
              }}
            >
              <strong className="ReportsAccordion__headerLeft">
                {summarizedReportGroup.groupName}
              </strong>
              <strong className="ReportsAccordion__headerRight text-uppercase">
                Total: {summarizedReportGroup.summarizedAmount}
              </strong>
            </dt>
            <dd
              className={classNames("ReportsAccordion__body", {
                "ReportsAccordion__body--show":
                  summarizedReportGroup.groupId === openedGroupId,
              })}
            >
              <Table>
                {summarizedReportGroup.reportRows.map((row) => {
                  return (
                    <tr key={JSON.stringify(row)}>
                      {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  );
                })}
              </Table>
            </dd>
          </Fragment>
        );
      })}
    </dl>
  );
};

export default ReportsAccordion;
