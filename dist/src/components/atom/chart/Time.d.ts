import { Moment } from "moment";
import { RefObject } from "react";
type TColors = "fill-danger" | "fill-info" | "fill-text-disabled" | "fill-success" | "fill-transparent";
interface ITimeProps<T> {
    data: T[];
    width: number;
    height: number;
    labels?: string[];
    tooltipRef: RefObject<HTMLDivElement>;
    theme?: Partial<Record<keyof T, TColors>>;
    translation: (_keyName: keyof T) => string;
    maxItemValue?: number;
    lineRef?: RefObject<SVGLineElement>;
}
type TKeyNames = {
    start: Moment;
    finish: Moment;
    scaled: Moment;
}[];
declare const TimeChart: <T extends Record<string, TKeyNames>>({ data, width, height, labels, tooltipRef, translation, theme, }: ITimeProps<T>) => import("react/jsx-runtime").JSX.Element | null;
export default TimeChart;
//# sourceMappingURL=Time.d.ts.map