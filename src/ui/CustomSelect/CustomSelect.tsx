import { FC, ReactNode } from "react";
import Select, { SingleValue, ActionMeta } from "react-select";

export interface Option {
  value: string;
  label: string;
}

type Props = {
  options: Option[];
  placeholder?: ReactNode;
  onChange?:
    | ((newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => void)
    | undefined;
};

export const CustomSelect: FC<Props> = ({ options, placeholder, onChange }) => {
  return (
    <Select options={options} onChange={onChange} placeholder={placeholder} />
  );
};
