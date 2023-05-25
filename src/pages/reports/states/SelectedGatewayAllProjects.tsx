import { FC } from "react";
import Box from "../../../ui/Box";
import { useGateways } from "../../../store";

const SelectedGatewayAllProjects: FC = () => {
  const selectedGatewayName = useGateways((state) => state.selectedName);

  return (
    <Box>
      <h2 className="Box__header">{selectedGatewayName} | All Projects</h2>
      Table for all the transactions of a selected gateway and a chart showing
      earning per project
    </Box>
  );
};

export default SelectedGatewayAllProjects;
