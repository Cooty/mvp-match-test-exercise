import { FC, ReactNode } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import Box from "../../../ui/Box";
import { getColors } from "./utils";
import "./Chart.scss";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

interface Props {
  labels: string[];
  toolTipLabel: string;
  data: number[];
  summary: ReactNode;
}

const Chart: FC<Props> = ({ summary, labels, toolTipLabel, data }) => {
  const colors = getColors(labels);

  return (
    <figure className="Chart">
      <Box>
        <figcaption className="Chart__legend">
          {labels.map((_, i) => (
            <div className="Chart__legendItem">
              <span
                className="Chart__legendColorMarker"
                style={{ backgroundColor: colors[i] }}
              />
              {labels[i]}
            </div>
          ))}
        </figcaption>
      </Box>
      <div className="Chart__container">
        <Doughnut
          data={{
            datasets: [
              {
                label: toolTipLabel,
                backgroundColor: [...colors],
                data: data,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              datalabels: {
                color: "#fff",
                formatter: (value, ctx) => {
                  let sum = 0;
                  const dataArr = ctx.chart.data.datasets[0].data;
                  dataArr.map((data) => {
                    sum += Number(data);
                  });
                  const percentage = ((value * 100) / sum).toFixed(2) + "%";
                  return percentage;
                },
              },
            },
          }}
        />
      </div>
      {summary} const chartData = ;
    </figure>
  );
};

export default Chart;
