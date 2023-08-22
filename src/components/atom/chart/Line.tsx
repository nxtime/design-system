import { RefObject } from "react";

const makePath = (
  positions: Record<string, number[]>,
  height: number,
  width: number,
  maxItemValue: number,
  itemWidth: number,
  filled: boolean,
) => {
  height = height - 16;
  const proportion = height / maxItemValue;

  const paths: string[] = [];

  Object.values(positions).forEach((position) => {
    let path = "";

    position.forEach((y, index) => {
      if (index === 0) {
        if (filled) {
          path += `M-4,${height + 50}L-4,${height - y * proportion}`;
        } else {
          path += `M0,${height - y * proportion}`;
        }
      }
      if (index > 0) path += `L${itemWidth * index},${height - y * proportion}`;
      if (index === position.length - 1) {
        path += `L${width + 4},${height + 50}`;
      }
    });

    paths.push(path);
  });

  return paths;
};

interface ILineProps<T> {
  data: T[];
  width: number;
  height: number;
  filled?: boolean;
  tooltipRef: RefObject<HTMLDivElement>;
  maxItemValue: number;
  lineRef: RefObject<SVGLineElement>;
}

const LineChart = <T extends Record<string, number>>({
  data,
  width,
  height,
  filled = true,
  tooltipRef,
  maxItemValue,
  lineRef,
}: ILineProps<T>) => {
  if (width === 0 || height === 0 || data.length === 0) return null;

  const itemsQty = Object.keys(data[0]).length;

  const itemWidth = width / (data.length - 1) + 1;

  const positions = data.reduce(
    (acc, current) => {
      (Object.entries(current) as [keyof T, number][]).forEach(
        ([name, value]) => {
          if (acc?.[name]) {
            acc[name].push(value);
          } else {
            acc[name] = [value];
          }
        },
      );
      return acc;
    },
    {} as Record<keyof T, number[]>,
  );

  const paths = makePath(
    positions,
    height,
    width,
    maxItemValue,
    itemWidth,
    filled,
  );

  return (
    <>
      {paths?.map((path, i: number) => {
        return (
          <g key={i}>
            <path
              className={filled ? "filled" : ""}
              d={path}
              strokeWidth="3"
              fill={filled ? "currentColor" : "none"}
              strokeLinejoin="round"
              strokeLinecap="round"
              onMouseMove={(e) => {
                const x = e.clientX;

                if (lineRef.current) {
                  const parentLeft = (
                    lineRef.current.parentNode as SVGSVGElement
                  ).getBoundingClientRect().left;

                  const itemsPositions = Array.from({ length: itemsQty }).map(
                    (_, index) => itemWidth * index,
                  );

                  const cursorDistanceToPositions = itemsPositions.map(
                    (position) => {
                      return Math.abs(x - parentLeft - position);
                    },
                  );

                  const closestPositionIndex =
                    cursorDistanceToPositions.indexOf(
                      Math.min(...cursorDistanceToPositions),
                    );

                  if (tooltipRef.current) {
                    const labels = Object.entries(
                      data[closestPositionIndex] ?? [],
                    ).reduce((acc, current) => {
                      acc += `<span>${current[0]}: ${current[1]}</span>`;
                      return acc;
                    }, "");

                    tooltipRef.current.innerHTML = `
                       ${labels}
                    `;
                  }

                  // const closestPosition =
                  //   closestPositionIndex === itemsPositions.length - 2
                  //     ? itemsPositions[closestPositionIndex] - 5
                  //     : itemsPositions[closestPositionIndex];

                  // lineRef.current.style.transform = `translate(${closestPosition}px, 0px)`;
                }
              }}
            />
            {filled && (
              <linearGradient id={`lgrad-${i}`} gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#4169e1"></stop>
                <stop offset="75%" stopColor="#c44764"></stop>
              </linearGradient>
            )}
          </g>
        );
      })}
    </>
  );
};

export default LineChart;
