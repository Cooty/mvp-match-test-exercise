import { FC } from "react";
import formatDate from "./format-date";

interface Props {
  isoString: string;
}

const FormattedDate: FC<Props> = ({ isoString }) => (
  <>{formatDate(isoString)}</>
);

export default FormattedDate;
