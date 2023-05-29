import { FC } from "react";
import ReportsContainer from "../ReportsContainer";
import Table from "../../../ui/Table";
import SummedUpReportAmount from "../SummedUpReportAmount/SummedUpReportAmount";

const SelectedProjectSelectedGateway: FC = () => {
  const DUMMY_DATA = [
    ["Date", "Transaction Id", "Gateway"],
    ["2021/01/12", "sdsdsdsd", "Amazon"],
    ["2021/02/21", "cvcvr4e", "PayPal"],
    ["2021/09/18", "cdeerrgb", "Google Pay"],
    ["2021/11/08", "sddvvv454", "Stripe"],
  ];

  return (
    <>
      <ReportsContainer>
        <Table rows={DUMMY_DATA} />
      </ReportsContainer>
      <SummedUpReportAmount />
    </>
  );
};

export default SelectedProjectSelectedGateway;
