import moment, { Moment } from "moment";
import { RefObject, useRef } from "react";

type TColors =
  | "fill-danger"
  | "fill-info"
  | "fill-text-disabled"
  | "fill-success";

interface ITimeProps<T> {
  data: T[];
  width: number;
  height: number;
  labels?: string[];
  tooltipRef: RefObject<HTMLDivElement>;
  theme?: Partial<Record<keyof T, TColors>>;
  maxItemValue?: number;
  lineRef?: RefObject<SVGLineElement>;
  iteration?: number;
}

type TKeyNames = {
  start: Moment;
  finish: Moment;
}[];

const TimeChart = <T extends Record<"period" | string, TKeyNames>>({
  data,
  width,
  height,
  labels,
  tooltipRef,
  theme,
  iteration = 0,
}: ITimeProps<T>) => {
  const mainFrameRef = useRef<SVGRectElement>(null);
  if (
    width === 0 ||
    height === 0 ||
    data.length === 0 ||
    iteration === data.length
  )
    return null;

  const spacing = labels?.length && labels?.length > 0 ? 80 : 0;

  width = width - spacing;

  const rectHeight = height / data.length;

  const { period, ...items } = data[iteration];

  // Find the minimum and maximum dates
  let minDate = period[0].start;
  let maxDate = period[0].finish;

  data.forEach((currentItems) => {
    Object.values(currentItems).forEach((itemArray) => {
      itemArray.forEach((item) => {
        minDate = moment.min(minDate, item.start);
        maxDate = moment.max(maxDate, item.finish);
      });
    });
  });

  // Calculate the proportion and offset
  const totalDuration = maxDate.diff(minDate);
  const proportion = width / totalDuration;

  return (
    <>
      <g
        onMouseMove={(e) => {
          if (e.target !== mainFrameRef.current) return;
          if (tooltipRef.current) {
            const offsetX = e.nativeEvent.offsetX;
            const timeOffset = (offsetX / width) * maxDate.diff(minDate);
            const hoverDatetime = minDate
              .clone()
              .add(timeOffset, "milliseconds");

            const formatCondition = maxDate.diff(minDate) / 3600 / 1000 > 24;
            [];
            const format = formatCondition ? "YYYY-MM-DD HH:mm:ss" : "HH:mm:ss";
            tooltipRef.current.innerHTML = `
              ${hoverDatetime.format(format)}
          `;
          }
        }}
      >
        {labels?.length && labels?.length > 0 && (
          <text
            x={spacing / 2 - labels[iteration].length * 4}
            y={rectHeight / 2 + rectHeight * iteration + 4}
          >
            {labels[iteration]}
          </text>
        )}
        <rect
          rx={4}
          x={spacing}
          y={rectHeight * iteration}
          ref={mainFrameRef}
          width={maxDate.diff(minDate) * proportion}
          height={rectHeight}
          className="fill-text-disabled"
        />
        {Object.values(items).map((itemArray, index) =>
          itemArray.map((item, innerIndex: number) => {
            const itemX = item.start.diff(minDate) * proportion;
            const duration = item.finish.diff(item.start);
            const itemWidth = duration * proportion;

            const name = Object.keys(items)[index];

            const label =
              duration / 3600 / 1000 < 1
                ? moment.utc(duration).format("mm[m]")
                : moment.utc(duration).format("HH[h]mm");

            const labelWidth = (label.length + 0.5) * 4;

            return (
              <g
                key={innerIndex}
                y={0}
                onMouseMove={(e) => {
                  const offsetX = e.nativeEvent.offsetX;
                  const timeOffset = (offsetX / width) * maxDate.diff(minDate);
                  const hoverDatetime = minDate
                    .clone()
                    .add(timeOffset, "milliseconds");

                  const formatCondition =
                    maxDate.diff(minDate) / 3600 / 1000 > 24;

                  const format = formatCondition
                    ? "YYYY-MM-DD HH:mm:ss"
                    : "HH:mm:ss";

                  if (tooltipRef.current) {
                    tooltipRef.current.innerHTML = `
                  <span>${name}</span>
                  <span>${hoverDatetime.format(format)}</span>
                  <span>
                    Início: ${moment(item.start).format("HH[h]mm")}
                  </span>
                  <span>
                    Fim: ${moment(item.finish).format("HH[h]mm")}
                  </span>
                  <span>
                    Duração: ${label}
                 </span>
              `;
                  }
                }}
              >
                <rect
                  className={
                    theme?.[Object.keys(items)[index]] ?? "fill-text-disabled"
                  }
                  width={itemWidth}
                  x={itemX + spacing}
                  height={rectHeight}
                  y={rectHeight * iteration}
                  fill="currentColor"
                />
                {labelWidth < itemWidth / 2 && (
                  <text
                    x={itemX + itemWidth / 2 - labelWidth + spacing}
                    y={rectHeight * iteration + rectHeight / 2 + 6}
                  >
                    {label}
                  </text>
                )}
              </g>
            );
          }),
        )}
      </g>
      <TimeChart
        data={data}
        width={width + spacing}
        height={height}
        labels={labels}
        tooltipRef={tooltipRef}
        iteration={iteration + 1}
        theme={theme}
      />
    </>
  );
};

export default TimeChart;
