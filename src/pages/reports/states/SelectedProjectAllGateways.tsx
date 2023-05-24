import { FC } from "react";
import Box from "../../../ui/Box";

const SelectedProjectAllGateways: FC = () => {
  return (
    <Box>
      <h2 className="Box__header">Project 1 | All Gateways</h2>
      Table for all the transactions of a selected project and a chart showing
      earning per gateway
    </Box>
  );
};

export default SelectedProjectAllGateways;
