import { FC } from "react";
import { BoxTitle } from "../../ui/Box";
import { useProjects, useGateways } from "../../store";

const SelectedProjectAndGatewayName: FC = () => {
  const selectedProjectName = useProjects((state) => state.selectedName);
  const selectedGatewayName = useGateways((state) => state.selectedName);
  return (
    <BoxTitle>
      {selectedProjectName} | {selectedGatewayName}
    </BoxTitle>
  );
};

export default SelectedProjectAndGatewayName;
