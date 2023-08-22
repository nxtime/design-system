import { RefObject } from "react";
declare const BarChart: <T extends Record<string, number>>({ width, height, data, showOnly, tooltipRef, groupBy, maxItemValue, }: {
    width: number;
    height: number;
    data: T[];
    showOnly?: keyof T | undefined;
    tooltipRef: RefObject<HTMLDivElement>;
    groupBy: keyof T;
    maxItemValue: number;
}) => import("react/jsx-runtime").JSX.Element | null;
export default BarChart;
//# sourceMappingURL=Bar.d.ts.map