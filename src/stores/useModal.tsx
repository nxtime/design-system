import { create } from "zustand";
import { combine } from "zustand/middleware";

const useModal = create(
  combine(
    {
      currentOpen: [] as string[],
    },
    (set, get) => ({
      openModal: (name: string) =>
        set({ currentOpen: [...get().currentOpen, name] }),
      closeModal: () => {
        const modalRoot = document.querySelector("#modal-root");
        if (!modalRoot) return;

        modalRoot.classList.add("closed");

        setTimeout(() => {
          modalRoot.classList.remove("closed");
          const currentOpenModals = get().currentOpen.slice(0, length - 2);
          set({ currentOpen: currentOpenModals });
        }, 190);
      },
    }),
  ),
);

export default useModal;
