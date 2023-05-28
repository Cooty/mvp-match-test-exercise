import { FC } from "react";
import formatMoney from "./format-money";

interface Props {
  amount: number;
  currency?: string;
}

const FormattedMoney: FC<Props> = ({ amount, currency = "USD" }) => (
  <>{formatMoney(amount, currency)}</>
);

export default FormattedMoney;
