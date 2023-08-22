import { ReactNode, RefObject } from "react";
import LineChart from "./Line";
import BarChart from "./Bar";
import TimeChart from "./Time";
interface IChartProps<T> {
    width?: number;
    hide?: (keyof T)[];
    height?: number;
    type: "bar" | "line" | string;
    data: T[];
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
    }) => ReactNode;
}
declare const Chart: <T extends Record<string, number>>({ type, width, height, hide, data, children, snap, }: IChartProps<T>) => import("react/jsx-runtime").JSX.Element;
export { LineChart as Line, BarChart as Bar, TimeChart as Time };
export default Chart;
//# sourceMappingURL=index.d.ts.map