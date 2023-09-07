import {
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import LineChart from "./Line";
import BarChart from "./Bar";
import TimeChart from "./Time";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface DebounceFunction<T extends (...args: any[]) => void> {
  (this: ThisParameterType<T>, ...args: Parameters<T>): void;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce<T extends (...args: any[]) => void>(
  func: T,
  timeout = 300,
): DebounceFunction<T> {
  let timer: ReturnType<typeof setTimeout>;
  return function(this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const setViewBox = (
  element: HTMLDivElement,
  ref: RefObject<SVGSVGElement>,
  setCurrentSize: Dispatch<SetStateAction<{ width: number; height: number }>>,
  hasDefaultHeight = false,
) => {
  const elementWidth = element.clientWidth;
  const elementHeight = element.clientHeight;

  ref.current?.setAttribute("viewBox", `0 0 ${elementWidth} ${elementHeight}`);
  ref.current?.setAttribute("width", String(elementWidth));

  if (!hasDefaultHeight) {
    ref.current?.setAttribute("height", String(elementHeight));
    setCurrentSize({
      height: elementHeight,
      width: elementWidth,
    });
    return;
  }

  ref.current?.setAttribute("height", String(elementHeight));
  setCurrentSize((p) => ({
    ...p,
    width: elementWidth,
  }));
};

export type TChartTranslation =
  | "services"
  | "workgroups"
  | "calls"
  | "scalegroups"
  | "workgroups"
  | "scales";

interface IChartProps<T> {
  width?: number;
  hide?: (keyof T)[];
  height?: number;
  type: "bar" | "line" | string;
  data: T[];
  translation: TChartTranslation;
  snap?: boolean;
  children: (item: {
    currentSize: { width: number; height: number };
    tooltipRef: RefObject<HTMLDivElement>;
    data: T[];
    maxItemValue: number;
    lineRef: RefObject<SVGLineElement>;
    translation: TChartTranslation;
  }) => ReactNode;
}
const Chart = <T extends Record<string, number>>({
  type,
  width,
  height,
  hide,
  data,
  children,
  translation = "workgroups",
  snap = false,
}: IChartProps<T>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [currentSize, setCurrentSize] = useState({
    width: width ?? 0,
    height: height ?? 0,
  });

  const tooltipRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  const filteredData = useCallback(() => {
    if (!hide) return data;
    return [...data].filter((item) => {
      hide.forEach((hiddenItem) => delete item[hiddenItem]);
      return item;
    });
  }, [hide, data]);

  console.log(currentSize);

  useEffect(() => {
    const parent = svgRef?.current?.parentNode as HTMLDivElement;

    window?.addEventListener(
      "resize",
      debounce(() =>
        setViewBox(parent, svgRef, setCurrentSize, height !== undefined),
      ),
    );

    if (!width || !height)
      setViewBox(parent, svgRef, setCurrentSize, height !== undefined);

    return () =>
      parent?.removeEventListener("resize", () =>
        setViewBox(parent, svgRef, () => { }, height !== undefined),
      );
  }, [setCurrentSize, width, height]);

  const maxItemValue = Math.max(
    ...filteredData().map((item) => {
      return Math.max(...Object.values(item));
    }),
  );

  return (
    <>
      <div
        ref={tooltipRef}
        className="chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      />
      <svg
        ref={svgRef}
        className={`chart ${type}`}
        viewBox={`0 0 ${width ?? 0} ${height ?? 0}`}
        width={currentSize.width}
        height={currentSize.height}
        onMouseMove={(e) => {
          if (lineRef.current && svgRef.current && tooltipRef.current) {
            const lineStyle = lineRef.current.style;
            const x = e.clientX;

            const left = svgRef.current.getBoundingClientRect().left;
            const top = svgRef.current.getBoundingClientRect().top;

            lineStyle.opacity = "1";

            if (snap) {
              const centralize = currentSize.width / (data.length * 4);
              const cursorDistanceToPositions = Array.from({
                length: data.length,
              }).map((_, index) => {
                return Math.abs(
                  x -
                  left -
                  centralize * index -
                  (currentSize.width / data.length) * index,
                );
              });

              const closestPositionIndex = cursorDistanceToPositions.indexOf(
                Math.min(...cursorDistanceToPositions),
              );

              const lineX =
                (currentSize.width / data.length) * closestPositionIndex +
                centralize * closestPositionIndex;
              lineStyle.transform = `translate(${lineX}px, 0px)`;
            } else {
              lineStyle.transform = `translate(${e.clientX - left}px, 0px)`;
              lineStyle.transition = "none";
            }

            if (tooltipRef.current.innerHTML === "") {
              tooltipRef.current.style.opacity = "0";
              return;
            }

            const tooltipOffset = e.clientX - left;
            const tooltipWidth = tooltipRef.current.clientWidth;
            tooltipRef.current.style.opacity = "1";

            let positionX = tooltipOffset + 20;
            const positionY = e.clientY - top + 20;

            if (
              tooltipRef.current.offsetLeft +
              tooltipOffset +
              tooltipWidth +
              20 >
              window.innerWidth
            ) {
              positionX = tooltipOffset - tooltipWidth - 20;
            }

            tooltipRef.current.style.transform = `translate(${positionX}px, ${positionY}px)`;
          }
        }}
        onMouseLeave={() => {
          if (tooltipRef.current && lineRef.current) {
            tooltipRef.current.innerHTML = "";
            tooltipRef.current.style.opacity = "0";

            lineRef.current.style.opacity = "0";
          }
        }}
      >
        {children({
          currentSize,
          tooltipRef,
          data: filteredData(),
          maxItemValue,
          lineRef,
          translation,
        })}
        <line
          ref={lineRef}
          x1="0"
          y1="0"
          x2="0"
          y2={height}
          strokeDasharray={8}
          style={{ stroke: "#ded", strokeWidth: "2px" }}
        />
      </svg>
    </>
  );
};

export { LineChart as Line, BarChart as Bar, TimeChart as Time };

export default Chart;
