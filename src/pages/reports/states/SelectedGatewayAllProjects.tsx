import { FC } from "react";
import ReportsContainer from "../ReportsContainer";

const SelectedGatewayAllProjects: FC = () => {
  return (
    <ReportsContainer>
      Table for all the transactions of a selected gateway and a chart showing
      earning per project
    </ReportsContainer>
  );
};

export default SelectedGatewayAllProjects;
