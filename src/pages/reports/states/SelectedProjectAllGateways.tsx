import { FC } from "react";
import Box from "../../../ui/Box";
import { useProjects } from "../../../store";

const SelectedProjectAllGateways: FC = () => {
  const selectedProjectName = useProjects((state) => state.selectedName);

  return (
    <Box>
      <h2 className="Box__header">{selectedProjectName} | All Gateways</h2>
      Table for all the transactions of a selected project and a chart showing
      earning per gateway
    </Box>
  );
};

export default SelectedProjectAllGateways;
