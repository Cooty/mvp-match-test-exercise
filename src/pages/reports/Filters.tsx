import { FC } from "react";
import Stack from "../../ui/Stack";
import "./Filters.scss";
import Button from "../../ui/Button";

const Filters: FC = () => {
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
          <select name="projects" id="projects">
            <option value="1">All Projects</option>
            <option value="2">Project 1</option>
            <option value="3">Project 2</option>
          </select>
          <select name="gateways" id="gateways">
            <option value="1">All gateways</option>
            <option value="2">Gateway 1</option>
            <option value="3">Gateway 2</option>
          </select>
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
