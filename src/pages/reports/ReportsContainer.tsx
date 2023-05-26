import { FC, PropsWithChildren } from "react";
import Box from "../../ui/Box";
import SelectedProjectAndGatewayName from "./SelectedProjectAndGatewayName";

const ReportsContainer: FC<PropsWithChildren> = ({ children, ...props }) => (
  <Box {...props}>
    <SelectedProjectAndGatewayName />
    {children}
  </Box>
);

export default ReportsContainer;
