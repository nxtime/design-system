declare const GenericChart: <T extends Record<string, string | number>>({ data, labelFormatter, groupBy, translation, type, hidden, color, }: {
    data: T[];
    type: "line" | "bar";
    translation?: string | undefined;
    groupBy?: keyof T | undefined;
    hidden?: (keyof T)[] | undefined;
    color?: "neutral" | "content" | "neutral-content" | undefined;
    labelFormatter?: ((_item: string | number) => string | number) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default GenericChart;
//# sourceMappingURL=Generic.d.ts.map