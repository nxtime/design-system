import { useCallback, useEffect, useRef, ReactNode, RefObject } from "react";
import useScroll from "@/hooks/useScroll";

interface ITableScroll<T> {
  children: (_options: { data: T[] }) => ReactNode;
  data: T[];
  tableContainerRef: RefObject<HTMLDivElement>;
}

const TableScroll = <T extends Record<string, string | number | Record<string, string | number>>>({
  children,
  data,
  tableContainerRef,
}: ITableScroll<T>) => {
  const { height, scrollHeight, top, root, setRoot, changeScrollData } =
    useScroll(tableContainerRef?.current);

  const currentItemsRef = useRef(0);

  const lastItem = useRef(currentItemsRef.current * 2);
  const itemHeight = 40;

  const getItemSize = useCallback(() => {
    if (tableContainerRef.current === null) return 10;
    return Math.ceil(tableContainerRef.current.clientHeight / itemHeight);
  }, [tableContainerRef]);

  useEffect(() => {
    if (root === null) {
      setRoot(tableContainerRef.current);
    }

    currentItemsRef.current = getItemSize();

    return () => {
    };
  }, [getItemSize, tableContainerRef, root, setRoot, changeScrollData]);

  const dataToRender = useCallback(() => {
    let startIndex = 0;

    if (root === null) return [];

    if (currentItemsRef.current < 10) {
      currentItemsRef.current = getItemSize() * 2;
    }

    if (Math.ceil(height + top) === scrollHeight) {
      lastItem.current += currentItemsRef.current;
      root.scrollTo({
        top: currentItemsRef.current * itemHeight,
      });
    }

    if (lastItem.current > currentItemsRef.current * 3 && top > 0) {
      startIndex = lastItem.current - currentItemsRef.current * 3;
    }

    if (top === 0 && lastItem.current > currentItemsRef.current * 3) {
      lastItem.current -= currentItemsRef.current;
      startIndex = lastItem.current - currentItemsRef.current * 3;
      root.scrollTo({
        top: currentItemsRef.current * itemHeight,
      });
    }

    return data.slice(startIndex, lastItem.current);
  }, [data, height, getItemSize, scrollHeight, top, root, currentItemsRef]);

  return children({ data: dataToRender() });
};

export default TableScroll;
