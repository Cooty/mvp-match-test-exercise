import { chartColors } from "./colors";

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const getColors = (labels: string[]) => {
  const selectedColors = [] as string[];
  const colorNames = Object.keys(chartColors);

  labels.forEach((_, i) => {
    const colorName = colorNames[i];
    if (colorName) {
      selectedColors.push(chartColors[colorName]);
    } else {
      selectedColors.push(randomColor());
    }
  });

  return selectedColors;
};
