import { FC } from "react";
import { useReports } from "../../../store";
import Box from "../../../ui/Box";
import sumUpReports from "./sum-up-reports";
import FormattedMoney from "../../../money/FormattedMoney";

const SummedUpReportAmount: FC = () => {
  const reports = useReports((state) => state.reports) || [];

  return (
    <Box className="mt-40">
      <strong>
        Total | <FormattedMoney amount={sumUpReports(reports).toFixed(2)} />
      </strong>
    </Box>
  );
};

export default SummedUpReportAmount;
