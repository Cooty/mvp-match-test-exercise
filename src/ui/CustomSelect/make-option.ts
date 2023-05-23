import { Option } from ".";

export function makeOption(
  sourceObject: Record<string, unknown>,
  valueKey: string,
  labelKey: string
): Option {
  return {
    value: sourceObject[valueKey] + "",
    label: sourceObject[labelKey] + "",
  };
}
