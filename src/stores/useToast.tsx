import { create } from "zustand";
import { combine } from "zustand/middleware";

export type TToastType = "danger" | "warning" | "info" | "base-200" | "neutral";

const toastSize = {
  small: "4rem",
  medium: "8rem",
  large: "12rem",
};

const useToast = create(
  combine(
    {
      currentOpen: [] as { type: TToastType; message: string }[],
    },
    () => ({
      dispatch: (item: {
        type?: TToastType;
        variant?: TToastType;
        message: string;
        size?: "small" | "medium" | "large";
      }) => {
        const toastRoot = document.querySelector("#toast-root");

        const toast = document.createElement("div");
        toast.className = "toast";

        const toastBody = document.createElement("div");
        toastBody.className = `toast-body shadow-md container rounded-box bg-${
          item?.variant ?? "neutral"
        }`;
        toast.append(toastBody);
        toast.style.setProperty(
          "--toast-size",
          `${toastSize[item?.size ?? "small"]}`,
        );

        const toastContent = document.createElement("span");
        toastContent.innerText = item.message;

        const toastButton = document.createElement("button");
        toastButton.className = "close-btn";
        toastButton.innerText = "x";

        toastButton.addEventListener("click", () => {
          toast.classList.add("closed");
          setTimeout(() => {
            toast.remove();
          }, 200);
        });

        const fillBar = document.createElement("div");
        fillBar.className = "fill-bar";
        fillBar.style.setProperty(
          "--fill-color",
          `var(--${item?.type ?? "info"})`,
        );

        setTimeout(() => {
          toast.classList.add("closed");
        }, 2.8 * 1000);

        setTimeout(() => {
          toast.remove();
        }, 3 * 1000);

        toastBody.append(toastContent, toastButton, fillBar);
        toastRoot?.appendChild(toast);
      },
    }),
  ),
);

export default useToast;
