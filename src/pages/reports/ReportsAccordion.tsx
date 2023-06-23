import { FC, Fragment, useState, useEffect } from "react";
import classNames from "classnames";
import "./ReportsAccordion.scss";
import Table from "../../ui/Table";
import AnimateHeight from "react-animate-height";

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
              className={classNames("ReportsAccordion__header", {
                "ReportsAccordion__header--clickable":
                  summarizedReportGroup.groupId !== openedGroupId,
              })}
              onClick={() => {
                setOpenedGroupId(summarizedReportGroup.groupId);
              }}
              aria-controls={summarizedReportGroup.groupId}
              aria-expanded={summarizedReportGroup.groupId === openedGroupId}
            >
              <strong className="ReportsAccordion__headerLeft">
                {summarizedReportGroup.groupName}
              </strong>
              <strong className="ReportsAccordion__headerRight text-uppercase">
                Total: {summarizedReportGroup.summarizedAmount}
              </strong>
            </dt>
            <dd className="ReportsAccordion__body">
              <AnimateHeight
                duration={300}
                id={summarizedReportGroup.groupId}
                height={
                  summarizedReportGroup.groupId === openedGroupId ? "auto" : 0
                }
              >
                <div className="ReportsAccordion__body-padding">
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
                </div>
              </AnimateHeight>
            </dd>
          </Fragment>
        );
      })}
    </dl>
  );
};

export default ReportsAccordion;
