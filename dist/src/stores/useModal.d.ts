declare const useModal: import("zustand").UseBoundStore<import("zustand").StoreApi<Omit<{
    currentOpen: string[];
}, "openModal" | "closeModal" | "closeAllModals"> & {
    openModal: (name: string) => void;
    closeModal: () => void;
    closeAllModals: () => void;
}>>;
export default useModal;
//# sourceMappingURL=useModal.d.ts.map