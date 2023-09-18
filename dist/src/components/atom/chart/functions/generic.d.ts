import { ApexOptions } from "apexcharts";
declare const dataToGenericCharts: <T extends Record<string, string | number>>({ data, groupBy, labels, groupByFormatter, hidden, }: {
    data: T[];
    groupBy?: keyof T | undefined;
    groupByFormatter?: ((_value: string | number) => string | number) | undefined;
    labels?: string[] | undefined;
    hidden?: (keyof T)[] | undefined;
}) => {
    series: {
        name: string;
        data: number[];
    }[];
    labels: string[];
};
interface IGenericChartOptions {
    type?: "bar" | "line";
    foreColor?: string;
    id?: string;
    series: {
        name: string;
        data: number[];
    }[];
    labelFormatter?: (_value: string | number) => string | number;
    dataLabelFormatter: (_value: string | number) => string | number;
    labels: string[];
}
declare const genericChartsOptions: ({ type, foreColor, id, labelFormatter, dataLabelFormatter, series, labels, }: IGenericChartOptions) => ApexOptions;
export { genericChartsOptions, dataToGenericCharts };
//# sourceMappingURL=generic.d.ts.map