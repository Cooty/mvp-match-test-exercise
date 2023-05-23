import { FC, useState, FormEvent } from "react";
import Stack from "../../ui/Stack";
import "./Filters.scss";
import Button from "../../ui/Button";
import { CustomSelect } from "../../ui/CustomSelect";
import { useProjectOptions, useGatewayOptions } from "../../store";
import { SingleValue } from "react-select";
import { Option } from "../../ui/CustomSelect";
import CustomDatePicker from "../../ui/CustomDatePicker";

const Filters: FC = () => {
  const projectOptions = useProjectOptions((state) => state.projects);
  const gatewayOptions = useGatewayOptions((state) => state.gateways);
  const dateFormat = "MM.dd.yyyy";
  const [toDate, setToDate] = useState<Date | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const projectsOnChangeHandler = (newValue: SingleValue<Option>) => {
    console.log(newValue?.label, newValue?.value);
  };
  const gatewaysOnChangeHandler = (newValue: SingleValue<Option>) => {
    console.log(newValue?.label, newValue?.value);
  };
  const fromDateOnChangeHandler = (date: Date | null) => {
    setFromDate(date);
  };
  const toDateOnChangeHandler = (date: Date | null) => {
    setToDate(date);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit...");
  };

  return (
    <div className="Filters">
      <div className="Filters__text">
        <h1>Reports</h1>
        <p className="strong color-grey">
          Easily generate a report of your transactions
        </p>
      </div>
      <form className="Filters__form" onSubmit={submitHandler}>
        <Stack style={{ flex: 1 }}>
          {projectOptions !== null && projectOptions.length !== 0 ? (
            <div className="Filters__selectContainer">
              <CustomSelect
                options={projectOptions}
                placeholder="Select project"
                onChange={projectsOnChangeHandler}
              />
            </div>
          ) : null}
          {gatewayOptions !== null && gatewayOptions.length !== 0 ? (
            <div className="Filters__selectContainer">
              <CustomSelect
                options={gatewayOptions}
                placeholder="Select gateway"
                onChange={gatewaysOnChangeHandler}
              />
            </div>
          ) : null}
          <div className="Filters__datePickerContainer">
            <CustomDatePicker
              placeholderText="from"
              selected={fromDate}
              onChange={fromDateOnChangeHandler}
              dateFormat={dateFormat}
            />
          </div>
          <div className="Filters__datePickerContainer">
            <CustomDatePicker
              placeholderText="to"
              selected={toDate}
              onChange={toDateOnChangeHandler}
              dateFormat={dateFormat}
            />
          </div>
          <Button type="submit">Generate Report</Button>
        </Stack>
      </form>
    </div>
  );
};

export default Filters;
