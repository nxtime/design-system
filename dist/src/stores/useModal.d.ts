declare const useModal: import("zustand").UseBoundStore<import("zustand").StoreApi<Omit<{
    currentOpen: string[];
}, "openModal" | "closeModal"> & {
    openModal: (name: string) => void;
    closeModal: () => void;
}>>;
export default useModal;
//# sourceMappingURL=useModal.d.ts.map