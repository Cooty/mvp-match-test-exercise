import { Option } from "./CustomSelect";

function getNameFromOptionList(id: string, optionList: Option[]) {
  let name;
  for (let i = 0; i < optionList.length; i++) {
    if (id === optionList[i].value) {
      name = optionList[i].label;
      break;
    }
  }
  return name;
}

export default getNameFromOptionList;
