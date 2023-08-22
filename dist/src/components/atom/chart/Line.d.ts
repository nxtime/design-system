import { RefObject } from "react";
interface ILineProps<T> {
    data: T[];
    width: number;
    height: number;
    filled?: boolean;
    tooltipRef: RefObject<HTMLDivElement>;
    maxItemValue: number;
    lineRef: RefObject<SVGLineElement>;
}
declare const LineChart: <T extends Record<string, number>>({ data, width, height, filled, tooltipRef, maxItemValue, lineRef, }: ILineProps<T>) => import("react/jsx-runtime").JSX.Element | null;
export default LineChart;
//# sourceMappingURL=Line.d.ts.map