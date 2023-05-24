import { FC, useState, FormEvent, useEffect } from "react";
import Stack from "../../ui/Stack";
import "./Filters.scss";
import Button from "../../ui/Button";
import { CustomSelect } from "../../ui/CustomSelect";
import {
  useProjectOptions,
  useGatewayOptions,
  useReports,
  useFilters,
} from "../../store";
import { SingleValue } from "react-select";
import { Option } from "../../ui/CustomSelect";
import CustomDatePicker from "../../date/CustomDatePicker";
import ReportsPayload from "../../interfaces/ReportsPayload";
import getISODateString from "../../date/get-iso-date-string";

const Filters: FC = () => {
  const projectOptions = useProjectOptions((state) => state.projects);
  const gatewayOptions = useGatewayOptions((state) => state.gateways);
  const setSelectedProjectOption = useProjectOptions(
    (state) => state.setSelected
  );
  const [selectedProjectInput, setSelectedProjectInput] = useState<
    Option | undefined
  >(undefined);
  const [selectedGatewayInput, setSelectedGatewayInput] = useState<
    Option | undefined
  >(undefined);
  const selectedProjectOption = useProjectOptions((state) => state.selected);
  const setSelectedGatewayOption = useGatewayOptions(
    (state) => state.setSelected
  );
  const setFiltersToTouched = useFilters((state) => state.setToTouched);
  const selectedGatewayOption = useGatewayOptions((state) => state.selected);
  const fetchReports = useReports((state) => state.fetch);
  const isReportsLoading = useReports((state) => state.isLoading);
  const reportsError = useReports((state) => state.error);
  const dateFormat = "MM.dd.yyyy";
  const [toDate, setToDate] = useState<Date | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const projectsOnChangeHandler = (newValue: SingleValue<Option>) => {
    if (newValue?.label && newValue?.value) {
      setSelectedProjectInput({
        label: newValue.label,
        value: newValue.value,
      });
    }
  };
  const gatewaysOnChangeHandler = (newValue: SingleValue<Option>) => {
    if (newValue?.label && newValue?.value) {
      setSelectedGatewayInput({
        label: newValue.label,
        value: newValue.value,
      });
    }
  };
  const fromDateOnChangeHandler = (date: Date | null) => {
    setFromDate(date);
  };
  const toDateOnChangeHandler = (date: Date | null) => {
    setToDate(date);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFiltersToTouched();
    const to = toDate && toDate instanceof Date ? getISODateString(toDate) : "";
    const from =
      fromDate && fromDate instanceof Date ? getISODateString(fromDate) : "";
    const projectId = selectedProjectOption ? selectedProjectOption.value : "";
    const gatewayId = selectedGatewayOption ? selectedGatewayOption.value : "";
    const payload: ReportsPayload = {
      to,
      from,
      projectId,
      gatewayId,
    };
    // communicate the submitted project / gateway to the global store
    if (selectedProjectInput && selectedGatewayInput) {
      setSelectedProjectOption(selectedProjectInput);
      setSelectedGatewayOption(selectedGatewayInput);
    }
    fetchReports(payload);
  };
  useEffect(() => {
    if (reportsError !== null) {
      throw new Error(reportsError);
    }
  }, [reportsError]);

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
          <Button type="submit" disabled={isReportsLoading}>
            Generate Report
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Filters;
