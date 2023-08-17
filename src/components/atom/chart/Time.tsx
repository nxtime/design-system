import moment, { Moment } from "moment";
import { Fragment, RefObject, useRef } from "react";

type TColors =
  | "fill-danger"
  | "fill-info"
  | "fill-text-disabled"
  | "fill-success"
  | "fill-transparent";

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

// TODO: identify which interval is less than the next one, so it shows as a proper layer;
const TimeChartRow = <T extends Record<string, TKeyNames>>({
  tooltipRef,
  width,
  maxDate,
  minDate,
  labels,
  spacing,
  iteration,
  rectHeight,
  proportion,
  theme,
  items,
  translation
}: {
  tooltipRef: RefObject<HTMLDivElement>;
  width: number;
  maxDate: Moment;
  minDate: Moment;
  labels?: string[];
  spacing: number;
  iteration: number;
  rectHeight: number;
  proportion: number;
  theme?: Partial<Record<keyof T, TColors>>;
  items: T;
  translation: (_keyName: keyof T) => string;
}) => {

  const mainFrameRef = useRef<SVGRectElement>(null);

  return <g
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
        y={rectHeight / 2 + rectHeight * iteration + 4 + 20}
      >
        {labels[iteration]}
      </text>
    )}
    <rect
      rx={4}
      x={spacing}
      y={rectHeight * iteration + 20}
      ref={mainFrameRef}
      width={maxDate.diff(minDate) * proportion}
      height={rectHeight}
      className={theme?.["period" as keyof T]} />
    {Object.values(items).map((itemArray, index) => itemArray.map((item, innerIndex: number) => {
      if (Object.keys(items as T)[index] === "period") return null;
      const itemX = item.start.diff(minDate) * proportion;
      const duration = item.finish.diff(item.start);
      const itemWidth = duration * proportion;

      const name = (Object.keys(items as T) as (keyof T)[])[index];

      let label = duration / 3600 / 1000 < 1
        ? moment.utc(duration).format("mm[m]")
        : moment.utc(duration).format("HH[h]mm");

      label =
        label.substring(label.length - 2, label.length) === "00"
          ? label.substring(0, label.length - 2)
          : label;

      const labelWidth = (label.length + 0.5) * 4;

      return (
        <g
          key={innerIndex}
          y={20}
          onMouseMove={(e) => {
            const offsetX = e.nativeEvent.offsetX;
            const timeOffset = (offsetX / width) * maxDate.diff(minDate);
            const hoverDatetime = minDate
              .clone()
              .add(timeOffset, "milliseconds");

            const formatCondition = maxDate.diff(minDate) / 3600 / 1000 > 24;

            const format = formatCondition
              ? "YYYY-MM-DD HH:mm:ss"
              : "HH:mm:ss";

            if (tooltipRef.current) {
              tooltipRef.current.innerHTML = `
                  <span>${translation(name as any)}</span>
                  <span>
                  ${hoverDatetime.format(format)} |
                    ${moment.utc(item.start).format("HH[h]mm")} -
                    ${moment.utc(item.finish).format("HH[h]mm")}
                  </span>
                  <span>
                    Escalado: ${moment.utc(item?.scaled as any).format("HH[h]mm")}
                  </span>
                  <span>
                    Duração: ${label}
                 </span>
              `;
            }
          }}
        >
          <rect
            className={theme?.[Object.keys(items)[index]] ?? "fill-text-disabled"}
            width={itemWidth}
            rx={4}
            x={itemX + spacing}
            height={rectHeight}
            y={rectHeight * iteration + 20}
            fill="currentColor" />
          {labelWidth < itemWidth / 2 && (
            <text
              x={itemX + itemWidth / 2 - labelWidth + spacing}
              y={rectHeight * iteration + rectHeight / 2 + 26}
            >
              {label}
            </text>
          )}
        </g>
      );
    })
    )}

  </g>;
}

const TimeChart = <T extends Record<"period" | string, TKeyNames>>({
  data,
  width,
  height,
  labels,
  tooltipRef,
  translation,
  theme,
}: ITimeProps<T>) => {

  if (
    width === 0 ||
    height === 0 ||
    data.length === 0
  )
    return null;

  const spacing = labels?.length && labels?.length > 0 ? 80 : 0;

  width = width - spacing;
  height = height - 20;

  const rectHeight = height / data.length;

  let minDate = moment();
  let maxDate = moment();

  data.forEach((currentItems) => {
    Object.values(currentItems).forEach((itemArray) => {
      itemArray.forEach((item) => {
        minDate = moment.min(minDate, item.start);
        maxDate = moment.max(maxDate, item.finish);
      });
    });
  });

  const totalDuration = maxDate.diff(minDate);
  const proportion = width / totalDuration;

  const hoursDuration = moment.duration(totalDuration, "milliseconds").hours();

  const interval = width / hoursDuration / 4;

  return (
    <>
      {
        data.map((currentData, iteration) => {
          return (
            <Fragment key={iteration}>

              <TimeChartRow
                width={width + spacing}
                labels={labels}
                items={currentData}
                maxDate={maxDate}
                minDate={minDate}
                spacing={spacing}
                iteration={iteration}
                proportion={proportion}
                rectHeight={rectHeight}
                translation={translation}
                tooltipRef={tooltipRef}
                theme={theme}
              />
            </Fragment>
          )
        })
      }
      {Array.from({ length: hoursDuration * 4 }).map((_, index) => {
        return (
          <g className="interval" key={index}>
            <line
              x1={interval * index + 80}
              x2={interval * index + 80}
              y1={20}
              y2={height + 20} />
          </g>
        );
      })}
      {Array.from({ length: hoursDuration + 1 }).map((_, index) => {
        const currentHour = moment.utc(minDate).hours() + index;
        return (
          <text
            x={interval * 4 * index + spacing - String(currentHour).length * 8}
            key={index}
            y={12}
            fill="#fff"
          >
            {currentHour}h
          </text>
        );
      })}
    </>
  );


};

export default TimeChart;
