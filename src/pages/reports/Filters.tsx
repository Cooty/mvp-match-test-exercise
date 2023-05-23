import { FC } from "react";
import Stack from "../../ui/Stack";
import "./Filters.scss";
import Button from "../../ui/Button";
import { CustomSelect } from "../../ui/CustomSelect";
import { useProjectOptions, useGatewayOptions } from "../../store";
import { SingleValue } from "react-select";
import { Option } from "../../ui/CustomSelect";

const Filters: FC = () => {
  const projectOptions = useProjectOptions((state) => state.projects);
  const gatewayOptions = useGatewayOptions((state) => state.gateways);
  const projectsOnChangeHandler = (newValue: SingleValue<Option>) => {
    console.log(newValue?.label, newValue?.value);
  };
  const gatewaysOnChangeHandler = (newValue: SingleValue<Option>) => {
    console.log(newValue?.label, newValue?.value);
  };

  return (
    <div className="Filters">
      <div>
        <h1>Reports</h1>
        <p className="strong color-grey">
          Easily generate a report of your transactions
        </p>
      </div>
      <form>
        <Stack>
          {projectOptions !== null && projectOptions.length !== 0 ? (
            <CustomSelect
              options={projectOptions}
              placeholder="Select project"
              onChange={projectsOnChangeHandler}
            />
          ) : null}
          {gatewayOptions !== null && gatewayOptions.length !== 0 ? (
            <CustomSelect
              options={gatewayOptions}
              placeholder="Select gateway"
              onChange={gatewaysOnChangeHandler}
            />
          ) : null}
          <input type="date" name="from" />
          <input type="date" name="to" />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Generate Report
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Filters;
