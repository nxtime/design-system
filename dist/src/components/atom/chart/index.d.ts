import { ReactNode, RefObject } from "react";
import LineChart from "./Line";
import BarChart from "./Bar";
import TimeChart from "./Time";
export type TChartTranslation = "services" | "workgroups" | "calls" | "scalegroups" | "workgroups" | "scales";
interface IChartProps<T> {
    width?: number;
    hide?: (keyof T)[];
    height?: number;
    type: "bar" | "line" | string;
    data: T[];
    translation: TChartTranslation;
    snap?: boolean;
    children: (item: {
        currentSize: {
            width: number;
            height: number;
        };
        tooltipRef: RefObject<HTMLDivElement>;
        data: T[];
        maxItemValue: number;
        lineRef: RefObject<SVGLineElement>;
        translation: TChartTranslation;
    }) => ReactNode;
}
declare const Chart: <T extends Record<string, string | number>>({ type, width, height, hide, data, children, translation, snap, }: IChartProps<T>) => import("react/jsx-runtime").JSX.Element;
export { LineChart as Line, BarChart as Bar, TimeChart as Time };
export default Chart;
//# sourceMappingURL=index.d.ts.map