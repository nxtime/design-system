import { RefObject } from "react";
import { TChartTranslation } from ".";
import { translate } from "translation-system";

interface IBarProps extends Partial<SVGGElement> {
  x: number;
  y: number;
  value: number;
  width: number;
  height: number;
  itemIndex: number;
  label?: string;
  labelHeight?: number;
  onMouseEnter?: (_e: { label: string | undefined; value: number }) => void;
  onMouseMove?: (_e: { y: number; x: number }) => void;
}

const Bar = ({
  label,
  onMouseEnter,
  x,
  y,

  height,
  width,
  ...barProps
}: IBarProps) => {
  if (barProps.value === 0) return null;
  const valueLength = String(barProps.value).length * 4;
  const valueWidth = width / 2 - valueLength;

  return (
    <g
      onMouseEnter={() =>
        onMouseEnter?.({
          label,
          value: barProps.value,
        })
      }
      onMouseMove={(e) =>
        barProps.onMouseMove?.({ x: e.clientX, y: e.clientY })
      }
    >
      <text x={x + valueWidth} y={y - 5}>
        {barProps.value}
      </text>
      <rect x={x} y={y} height={height} width={width} rx={4} />
    </g>
  );
};

const BarChart = <T extends Record<string, number>>({
  width,
  height,
  data,
  showOnly,
  tooltipRef,
  groupBy,
  translation,
  maxItemValue,
}: {
  width: number;
  height: number;
  data: T[];
  showOnly?: keyof T;
  tooltipRef: RefObject<HTMLDivElement>;
  groupBy: keyof T;
  translation: TChartTranslation;
  maxItemValue: number;
}) => {
  console.log(data);
  if (width === 0 || height === 0 || data.length === 0) return null;
  if (showOnly) {
    data = data.map((item) => ({
      [groupBy]: item[groupBy],
      [showOnly]: item[showOnly],
    })) as unknown as T[];
  }

  const itemsQty = Object.keys(data[0]).length;

  let itemMargin = 24;
  let itemWidth = (width - itemMargin * (data.length - 1)) / data.length;

  if (!showOnly) {
    itemMargin = 0;
    itemWidth =
      (width - itemMargin * (data.length - 1) * (itemsQty - 1)) /
      data.length /
      itemsQty;
  } else {
    itemMargin = 24;
  }

  console.log(data, itemWidth, itemsQty);
  return (
    <>
      {data.map((item, itemIndex) => {
        const proportion = (height - 40) / maxItemValue;
        const newItem = { ...item };

        delete newItem[groupBy];

        let iteration = 1;

        const currentItemIteration = itemIndex * iteration * itemsQty;
        let itemDistance =
          currentItemIteration * ((itemWidth + itemMargin) / (itemsQty - 1));

        let textDistance = itemIndex > 0 ? itemDistance / 2 : itemDistance;
        textDistance += String(item[groupBy]).length * 6;

        const groupItem = (itemWidth + itemMargin) * itemsQty;

        let currentCount = 0;

        if (!showOnly) {
          const groupDistance =
            (width - itemMargin * (data.length - 1)) / data.length;
          textDistance =
            groupDistance * itemIndex +
            groupDistance / 2 -
            String(item[groupBy]).length * 8;
        }

        console.log(translate(`data.workgroups.name`));

        return (
          <g key={itemIndex}>
            {Object.entries(newItem).map(([name, value]) => {
              const index = currentCount;

              if (value === 0) return null;

              const currentItemIteration = index * itemsQty;

              itemDistance =
                currentItemIteration *
                ((itemWidth + itemMargin * (itemsQty - 1)) / (itemsQty - 1));

              itemDistance = itemDistance + itemIndex * groupItem;

              if (showOnly) {
                itemDistance /= 2;
              }

              const itemHeight = value * proportion;

              iteration += 1;
              currentCount += 1;

              return (
                <Bar
                  key={`${name}-${itemIndex}`}
                  x={itemDistance}
                  value={value}
                  y={height - 20 - itemHeight}
                  onMouseEnter={({ label, value }) => {
                    if (tooltipRef.current) {
                      tooltipRef.current.innerHTML = `
                         <span>${label}: ${value}</span>
                    `;
                    }
                  }}
                  itemIndex={itemIndex}
                  width={itemWidth}
                  height={itemHeight}
                  label={translate(
                    `data.${translation}.${name}` as unknown as "data.workgroups.name",
                  )}
                />
              );
            })}
            <text
              y={height - 4}
              x={
                textDistance +
                (itemWidth -
                  itemMargin -
                  itemWidth * (itemsQty - 3) -
                  String(item[groupBy]).length * 8) /
                2
              }
            >
              {item[groupBy]}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default BarChart;
