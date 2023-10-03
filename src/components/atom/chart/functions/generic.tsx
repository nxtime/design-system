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
}): {
  series: { name: string; data: number[] }[];
  labels: string[];
} => {
  if (data?.length === 0) return { series: [], labels: [] };
  const columnsWithoutData = [] as (keyof T)[];

  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (item[key] === 0) {
        columnsWithoutData.push(key);
      }
    });
  });

  const series = [] as { name: string; data: number[] }[];
  const seriesIndex = {} as { index: number };
  let currentIndex = 0;
  const currentLabels = [] as (string | number)[];

  Object.keys(data[0]).forEach((name) => {
    if (
      hidden.includes(name as keyof T) ||
      groupBy === name ||
      columnsWithoutData.includes(name)
    )
      return;
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
      if (hidden.includes(name) || columnsWithoutData.includes(name)) return;

      let value = 0;

      if (typeof possibleValue === "number") value = possibleValue;

      series[seriesIndex[name as "index"]]?.data?.push(value);
    });
  });

  return { series, labels: (currentLabels as unknown as string[]) ?? labels };
};

interface IGenericChartOptions {
  type?: "bar" | "line";
  foreColor?: string;
  id?: string;
  series: { name: string; data: number[] }[];
  dataFormatter?: (_value: string | number) => string | number;
  labelFormatter?: (_value: string | number) => string | number;
  dataLabelFormatter: (_value: string | number) => string | number;
  labels: string[];
  showToolbar?: boolean
}

const genericChartsOptions = ({
  type = "bar",
  foreColor = "var(--neutral-content)",
  id = "any",
  labelFormatter = (v) => v,
  dataFormatter = (v) => v,
  dataLabelFormatter = (v) => v,
  series = [],
  labels = [],
  showToolbar = false
}: IGenericChartOptions) => {
  return {
    options: {
      chart: {
        id,
        type,
        foreColor,
        toolbar: {
          show: showToolbar,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "around",
        },
      },
      colors: [
        "var(--info)",
        "var(--info-hover)",
        "var(--danger)",
        "var(--danger-hover)",
        "var(--warning)",
        "var(--warning-hover)",
        "var(--primary)",
        "var(--primary-hover)",
      ],
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
        formatter: dataFormatter,
      },
      tooltip: {
        x: {},
        y: {
          formatter: dataFormatter,
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
