import { useEffect, useState } from "react";
import { debounce } from "../utils/helpers/debounce";

const useScroll = (currentRoot?: Element | null) => {
  const [root, setRoot] = useState<Element | null>(currentRoot);
  // root =
  //   root === undefined || root === null
  //     ? document.querySelector("#root")!
  //     : root;
  const [scrollData, changeScrollData] = useState<{
    top: number;
    scrollHeight: number;
    height: number;
  }>({
    top: root?.scrollTop ?? 0,
    scrollHeight: root?.scrollHeight ?? 0,
    height: root?.clientHeight ?? 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (root) {
        changeScrollData({
          top: root.scrollTop,
          scrollHeight: root.scrollHeight,
          height: root.clientHeight,
        });
      }
    };

    if (root) {
      root?.addEventListener("scroll", debounce(handleScroll, 150));

      return () => {
        root?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [root]);

  if (!root)
    return {
      top: 0,
      scrollHeight: 0,
      height: 0,
      scrollTo: () => {},
      root,
      setRoot,
      changeScrollData
    };

  return { ...scrollData, scrollTo: root.scrollTo, root, setRoot, changeScrollData };
};

export default useScroll;
