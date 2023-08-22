import { Moment } from "moment";
import { RefObject } from "react";
interface IDateDropDown {
    defaultSelected?: {
        start: Moment;
        end: Moment;
    };
    startDateRef: RefObject<HTMLInputElement>;
    endDateRef: RefObject<HTMLInputElement>;
    onClose: () => void;
}
declare const DateDropdown: ({ defaultSelected, startDateRef, endDateRef, onClose, }: IDateDropDown) => import("react/jsx-runtime").JSX.Element;
export default DateDropdown;
//# sourceMappingURL=dropdown.d.ts.map