import { FC, useState, FormEvent, useEffect } from "react";
import Stack from "../../ui/Stack";
import "./Filters.scss";
import Button from "../../ui/Button";
import { CustomSelect } from "../../ui/CustomSelect";
import { useProjects, useGateways, useReports, useFilters } from "../../store";
import { SingleValue } from "react-select";
import { Option } from "../../ui/CustomSelect";
import CustomDatePicker from "../../date/CustomDatePicker";
import ReportsPayload from "../../interfaces/ReportsPayload";
import getISODateString from "../../date/get-iso-date-string";

const Filters: FC = () => {
  const projectOptions = useProjects((state) => state.projects);
  const gatewayOptions = useGateways((state) => state.gateways);
  const setSelectedProjectId = useProjects((state) => state.setSelectedId);
  const setSelectedProjectName = useProjects((state) => state.setSelectedName);
  const setSelectedGatewayId = useGateways((state) => state.setSelectedId);
  const setSelectedGatewayName = useGateways((state) => state.setSelectedName);
  const [selectedProjectInput, setSelectedProjectInput] = useState<
    Option | undefined
  >(undefined);
  const [selectedGatewayInput, setSelectedGatewayInput] = useState<
    Option | undefined
  >(undefined);
  const setFiltersToTouched = useFilters((state) => state.setToTouched);
  const fetchReports = useReports((state) => state.fetch);
  const isReportsLoading = useReports((state) => state.isLoading);
  const reportsError = useReports((state) => state.error);
  const fromMinDate = new Date("2021-01-01");
  const fromMaxDate = new Date("2021-12-30");
  const toMinDate = new Date("2021-01-02");
  const toMaxDate = new Date("2021-12-31");
  const [toDate, setToDate] = useState<Date | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const projectsOnChangeHandler = (newValue: SingleValue<Option>) => {
    setSelectedProjectInput({
      label: newValue?.label ? newValue.label : "",
      value: newValue?.value ? newValue.value : "",
    });
  };
  const gatewaysOnChangeHandler = (newValue: SingleValue<Option>) => {
    setSelectedGatewayInput({
      label: newValue?.label ? newValue.label : "",
      value: newValue?.value ? newValue.value : "",
    });
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
    const projectId = selectedProjectInput ? selectedProjectInput.value : "";
    const gatewayId = selectedGatewayInput ? selectedGatewayInput.value : "";
    const payload: ReportsPayload = {
      to,
      from,
      projectId,
      gatewayId,
    };
    // communicate the submitted project / gateway to the global store
    if (selectedProjectInput) {
      setSelectedProjectId(selectedProjectInput.value);
      setSelectedProjectName(selectedProjectInput.label);
    }
    if (selectedGatewayInput) {
      setSelectedGatewayId(selectedGatewayInput.value);
      console.log(selectedGatewayInput.label);
      setSelectedGatewayName(selectedGatewayInput.label);
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
              minDate={fromMinDate}
              maxDate={fromMaxDate}
              startDate={fromMinDate}
            />
          </div>
          <div className="Filters__datePickerContainer">
            <CustomDatePicker
              placeholderText="to"
              selected={toDate}
              onChange={toDateOnChangeHandler}
              minDate={toMinDate}
              maxDate={toMaxDate}
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
