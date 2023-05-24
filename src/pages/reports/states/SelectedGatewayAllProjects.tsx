import { FC } from "react";
import Box from "../../../ui/Box";

const SelectedGatewayAllProjects: FC = () => {
  return (
    <Box>
      <h2 className="Box__header">Gateway 1 | All Projects</h2>
      Table for all the transactions of a selected gateway and a chart showing
      earning per project
    </Box>
  );
};

export default SelectedGatewayAllProjects;
