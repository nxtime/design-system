import {
  Dispatch,
  KeyboardEvent,
  MutableRefObject,
  SetStateAction,
} from "react";

const handleSelectKeyDown = (
  e: KeyboardEvent<HTMLButtonElement>,
  focused: number,
  setFocused: Dispatch<SetStateAction<number>>,
  filterRef: MutableRefObject<string>,
  itemsRef: MutableRefObject<HTMLButtonElement[]>,
  length: number,
) => {
  let newFocused = 0;
  let searching = false;

  switch (e.key) {
    case "ArrowUp": {
      if (focused === 0) return;
      newFocused = focused - 1;
      itemsRef.current[newFocused].focus();
      setFocused(newFocused);
      filterRef.current = "";
      break;
    }
    case "ArrowDown": {
      if (focused === length - 1) return;
      newFocused = focused + 1;
      itemsRef.current[newFocused].focus();
      filterRef.current = "";
      setFocused(newFocused);
      break;
    }
    case "Backspace": {
      filterRef.current = filterRef.current.slice(0, -1);
      if (filterRef.current.length > 0) {
        searching = true;
      }
      break;
    }
    default: {
      if (e.key.length === 1 && isNaN(Number(e.key))) {
        filterRef.current += e.key;
        searching = true;
      }
    }
  }

  if (searching) {
    const foundItemIndex = itemsRef.current.findIndex((item) =>
      item.innerText.toLowerCase().includes(filterRef.current.toLowerCase()),
    );
    if (foundItemIndex === -1) return;
    itemsRef.current[foundItemIndex].focus();
    setFocused(foundItemIndex);
  }
};

export { handleSelectKeyDown };
