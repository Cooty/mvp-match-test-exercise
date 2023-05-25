import { FC } from "react";
import Box from "../../../ui/Box";
import { useGateways, useProjects } from "../../../store";

const SelectedProjectSelectedGateway: FC = () => {
  const selectedProjectName = useProjects((state) => state.selectedName);
  const selectedGatewayName = useGateways((state) => state.selectedName);

  return (
    <Box>
      <h2 className="Box__header">
        {selectedProjectName} | {selectedGatewayName}
      </h2>
      Table for all reports relating to the selected project and only for the
      selected gateway
    </Box>
  );
};

export default SelectedProjectSelectedGateway;
