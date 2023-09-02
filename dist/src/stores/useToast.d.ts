export type TToastType = "danger" | "success" | "warning" | "info" | "base-200" | "neutral";
declare const useToast: import("zustand").UseBoundStore<import("zustand").StoreApi<Omit<{
    currentOpen: {
        type: TToastType;
        message: string;
    }[];
}, "dispatch"> & {
    dispatch: (item: {
        type?: TToastType;
        variant?: TToastType;
        message: string;
        size?: "small" | "medium" | "large";
    }) => void;
}>>;
export default useToast;
//# sourceMappingURL=useToast.d.ts.map