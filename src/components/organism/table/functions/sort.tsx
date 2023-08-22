const sortByKey = <T,>(
  data: T[],
  key: keyof T | null,
  sortOrder = "asc",
) => {
  if (sortOrder === "default" || key === null) return data;
  const orderMultiplier = sortOrder === "asc" ? 1 : -1;

  return data.toSorted((a: T, b: T) => {
    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) {
      return -1 * orderMultiplier;
    } else if (aValue > bValue) {
      return 1 * orderMultiplier;
    } else {
      return 0;
    }
  });
};

export { sortByKey };
