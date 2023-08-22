import { HTMLProps, ReactNode } from "react";
import { Moment } from "moment";
type TChildrenResponse = {
    startDateProps: HTMLProps<HTMLInputElement>;
    endDateProps: HTMLProps<HTMLInputElement>;
};
type TSearchResponse = {
    start: string;
    end: string;
};
interface IDateRangerPickerProps {
    defaultSelected?: {
        start: Moment;
        end: Moment;
    };
    children: (_item: Partial<TChildrenResponse>) => ReactNode;
    onSearch?: (_value: TSearchResponse) => void;
}
declare const DateRangerPicker: ({ defaultSelected, onSearch, children, }: IDateRangerPickerProps) => import("react/jsx-runtime").JSX.Element;
export default DateRangerPicker;
//# sourceMappingURL=index.d.ts.map