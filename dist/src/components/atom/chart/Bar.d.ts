import { RefObject } from "react";
import { TChartTranslation } from ".";
declare const BarChart: <T extends Record<string, string | number>>({ width, height, data, showOnly, tooltipRef, groupBy, translation, maxItemValue, }: {
    width: number;
    height: number;
    data: T[];
    showOnly?: keyof T | undefined;
    tooltipRef: RefObject<HTMLDivElement>;
    groupBy: keyof T;
    translation: TChartTranslation;
    maxItemValue: number;
}) => import("react/jsx-runtime").JSX.Element | null;
export default BarChart;
//# sourceMappingURL=Bar.d.ts.map