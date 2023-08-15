const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate?: boolean,
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<T>): void => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout as ReturnType<typeof setTimeout>);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export { debounce };
