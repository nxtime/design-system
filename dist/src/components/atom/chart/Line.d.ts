import { RefObject } from "react";
import { TChartTranslation } from ".";
interface ILineProps<T> {
    data: T[];
    width: number;
    height: number;
    filled?: boolean;
    tooltipRef: RefObject<HTMLDivElement>;
    maxItemValue: number;
    translation: TChartTranslation;
    lineRef: RefObject<SVGLineElement>;
}
declare const LineChart: <T extends Record<string, number>>({ data, width, height, filled, tooltipRef, translation, maxItemValue, lineRef, }: ILineProps<T>) => import("react/jsx-runtime").JSX.Element | null;
export default LineChart;
//# sourceMappingURL=Line.d.ts.map