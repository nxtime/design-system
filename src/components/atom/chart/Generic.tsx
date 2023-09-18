import Chart from "react-apexcharts";
import { dataToGenericCharts, genericChartsOptions } from "./functions/generic";
import { initAppTranslation, translate } from "translation-system";

const GenericChart = <T extends Record<string, number | string>>({
  data,
  labelFormatter,
  groupBy,
  translation = "common",
  type = "bar",
  hidden = [],
  color = "neutral-content",
}: {
  data: T[];
  type: "line" | "bar";
  translation?: string;
  groupBy?: keyof T;
  hidden?: (keyof T)[];
  color?: "neutral" | "neutral-content" | "content";
  labelFormatter?: (_item: string | number) => string | number;
}) => {
  initAppTranslation({ language: "pt-BR" });
  return (
    <Chart
      type={type}
      {...genericChartsOptions({
        type,
        labelFormatter,
        dataLabelFormatter: (value) =>
          translate(`${translation}.${value}` as "common.ok"),
        foreColor: `var(--${color})`,
        id: "any",
        ...dataToGenericCharts({
          data,
          groupBy,
          hidden,
        }),
      })}
    />
  );
};

export default GenericChart;
