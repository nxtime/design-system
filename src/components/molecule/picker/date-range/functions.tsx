import { FocusEvent } from "react";

const handleStartDateFocus = (
  e: FocusEvent<HTMLInputElement, Element> | undefined,
) => {console.log(e)};

const handleEndDateFocus = (
  e: FocusEvent<HTMLInputElement, Element> | undefined,
) => {console.log(e)};

export { handleStartDateFocus, handleEndDateFocus };
