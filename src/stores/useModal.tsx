import { create } from "zustand";
import { combine } from "zustand/middleware";

const useModal = create(
  combine(
    {
      currentOpen: [] as string[],
    },
    (set, get) => ({
      openModal: (name: string) => {
        if (get().currentOpen.includes(name)) return;
        const newCurrentOpen = [...get().currentOpen, name];
        console.log("Updated openModal: ", newCurrentOpen);
        set({ currentOpen: newCurrentOpen });
      },
      closeModal: () => {
        const modalRoot = document.querySelector("#modal-root");
        if (!modalRoot) return;

        modalRoot.classList.add("closed");

        setTimeout(() => {
          modalRoot.classList.remove("closed");
          const currentOpenModals = get().currentOpen.slice(
            0,
            get().currentOpen.length - 1,
          );
          console.log("Updated openModal: ", currentOpenModals);
          set({ currentOpen: currentOpenModals });
        }, 190);
      },
    }),
  ),
);

export default useModal;
