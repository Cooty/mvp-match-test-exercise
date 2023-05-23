import { FC, ReactNode } from "react";
import Select, {
  SingleValue,
  ActionMeta,
  components,
  DropdownIndicatorProps,
} from "react-select";
import { ReactComponent as TriangleDownSVG } from "../../images/triangle-down.svg";

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

const DropdownIndicator = (props: DropdownIndicatorProps<Option, true>) => {
  return (
    <components.DropdownIndicator {...props}>
      <TriangleDownSVG />
    </components.DropdownIndicator>
  );
};

export const CustomSelect: FC<Props> = ({ options, placeholder, onChange }) => {
  // see: https://react-select.com/styles#the-styles-prop
  // see: https://react-select.com/styles#inner-components
  const customStyles = {
    control: (baseStyle: object, state: { isFocused: boolean }) => ({
      ...baseStyle,
      backgroundColor: "var(--green)",
      borderColor: state.isFocused
        ? "var(--dark-green) !important"
        : "var(--green)",
    }),
    placeholder: (baseStyle: object) => ({
      ...baseStyle,
      color: "var(--placeholder-color)",
    }),
    singleValue: (baseStyle: object) => ({
      ...baseStyle,
      color: "var(--white)",
    }),
    indicatorSeparator: (baseStyle: object) => ({
      ...baseStyle,
      backgroundColor: "transparent",
    }),
    option: (baseStyle: object, state: { isFocused: boolean }) => ({
      ...baseStyle,
      backgroundColor: state.isFocused ? "var(--dark-green)" : "var(--green)",
      color: "var(--white)",
    }),
    menu: (baseStyle: object) => ({
      ...baseStyle,
      backgroundColor: "var(--green)",
      borderColor: "var(--green)",
      marginTop: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    }),
  };

  return (
    <Select
      options={options}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onChange={onChange}
      placeholder={placeholder}
      isSearchable={false}
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};
