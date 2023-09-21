const normalizeNumber = (
  number: number | string,
  options?: Intl.NumberFormatOptions | undefined,
) => {
  if (number === null) return 0;
  const { language } = navigator;
  if (typeof number === "number") {
    number = Number(number);

    if (isNaN(number)) number = 0;
  }

  return number.toLocaleString(language, options);
};

export { normalizeNumber };
