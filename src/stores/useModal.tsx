import { create } from "zustand";
import { combine } from "zustand/middleware";

const useModal = create(
  combine(
    {
      isOpen: false,
      current: "",
    },
    (set) => ({
      openModal: (name: string) => set({ isOpen: true, current: name }),
      closeModal: () => {
        const modalRoot = document.querySelector("#modal-root");
        if (!modalRoot) return;

        modalRoot.classList.add("closed");

        setTimeout(() => {
          modalRoot.classList.remove("closed");
          set({ isOpen: false, current: "" });
        }, 190);
      },
    }),
  ),
);

export default useModal;
