import { FC } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./CustomDatePicker.scss";

const CustomDatePicker: FC<ReactDatePickerProps> = (props) => {
  const dateFormat = "MM.dd.yyyy";

  return (
    <div className="CustomDatePicker">
      <DatePicker {...props} showIcon dateFormat={dateFormat} />
    </div>
  );
};

export default CustomDatePicker;
