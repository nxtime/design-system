import { ApexOptions } from "apexcharts";

const dataToGenericCharts = <T extends Record<string, string | number>>({
  data,
  groupBy,
  labels,
  groupByFormatter = (value) => value,
  hidden = [],
}: {
  data: T[];
  groupBy?: keyof T;
  groupByFormatter?: (_value: string | number) => string | number;
  labels?: string[];
  hidden?: (keyof T)[];
}): { series: { name: string; data: number[] }[]; labels: string[] } => {
  if (data?.length === 0) return { series: [], labels: [] };

  const series = [] as { name: string; data: number[] }[];
  const seriesIndex = {} as { index: number };
  let currentIndex = 0;
  const currentLabels = [] as (string | number)[];

  Object.keys(data[0]).forEach((name) => {
    if (hidden.includes(name as keyof T) || groupBy === name) return;
    series.push({ name, data: [] });
    seriesIndex[name as "index"] = currentIndex;
    currentIndex++;
  });

  data.forEach((item) => {
    Object.entries(item).forEach(([name, possibleValue]) => {
      if (groupBy === name) {
        currentLabels.push(
          groupByFormatter(possibleValue as string | number) ?? "",
        );
      }
      if (hidden.includes(name)) return;
      let value = 0;
      if (typeof possibleValue === "number") value = possibleValue;
      series[seriesIndex[name as "index"]]?.data?.push(value);
    });
  });

  console.log({ series, labels: currentLabels });

  return { series, labels: (currentLabels as unknown as string[]) ?? labels };
};

interface IGenericChartOptions {
  type?: "bar" | "line";
  foreColor?: string;
  id?: string;
  series: { name: string; data: number[] }[];
  labelFormatter?: (_value: string | number) => string | number;
  dataLabelFormatter: (_value: string | number) => string | number;
  labels: string[];
}

const genericChartsOptions = ({
  type = "bar",
  foreColor = "var(--neutral-content)",
  id = "any",
  labelFormatter = (v) => v,
  dataLabelFormatter = (v) => v,
  series = [],
  labels = [],
}: IGenericChartOptions) => {
  return {
    options: {
      chart: {
        id,
        type,
        foreColor,
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "around",
        },
      },
      colors: ["var(--info)", "var(--info-hover)"],
      grid: {
        show: false,
      },
      legend: {
        position: "top",
        formatter: dataLabelFormatter,
      },
      xaxis: {
        categories: labels,
        labels: {
          formatter: labelFormatter,
          style: {
            colors: ["var(--text-neutral-content)"],
          },
        },
      },
      dataLabels: {
        enabled: true,
        // formatter: dataLabelFormatter,
      },
      tooltip: {
        x: {},
        y: {
          title: {
            formatter: dataLabelFormatter,
          },
        },
      },
      yaxis: {
        show: false,
      },
    },
    series: series ?? [],
  } as ApexOptions;
};

export { genericChartsOptions, dataToGenericCharts };
