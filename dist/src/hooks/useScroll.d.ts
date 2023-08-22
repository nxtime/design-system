/// <reference types="react" />
declare const useScroll: (currentRoot?: Element | null) => {
    top: number;
    scrollHeight: number;
    height: number;
    scrollTo: () => void;
    root: null;
    setRoot: import("react").Dispatch<import("react").SetStateAction<Element | null>>;
    changeScrollData: import("react").Dispatch<import("react").SetStateAction<{
        top: number;
        scrollHeight: number;
        height: number;
    }>>;
} | {
    scrollTo: {
        (options?: ScrollToOptions | undefined): void;
        (x: number, y: number): void;
    };
    root: Element;
    setRoot: import("react").Dispatch<import("react").SetStateAction<Element | null>>;
    changeScrollData: import("react").Dispatch<import("react").SetStateAction<{
        top: number;
        scrollHeight: number;
        height: number;
    }>>;
    top: number;
    scrollHeight: number;
    height: number;
};
export default useScroll;
//# sourceMappingURL=useScroll.d.ts.map