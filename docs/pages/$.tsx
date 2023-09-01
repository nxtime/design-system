import React from "react";
import { Modal, useModal, useToast } from "../../src";

const Home = () => {
  const { openModal, closeAllModals } = useModal();
  const { dispatch } = useToast();
  return (
    <div className="container center" style={{ width: "100%", height: "100%" }}>
      <button className="btn btn-primary" onClick={() => openModal("test")}>
        Open modal
      </button>
      <Modal variant="base-200" currentName="test" size="fill">
        <h2 className="title">I'm a title in a modal</h2>
        <button
          className="btn btn-info"
          style={{ alignSelf: "flex-end", marginTop: "auto" }}
          onClick={() => openModal("another-modal")}
        >
          Open another modal
        </button>
      </Modal>
      <Modal currentName="another-modal">
        <h2 className="title">I'm another modal</h2>
        <button
          className="btn btn-warning"
          onClick={() => {
            closeAllModals();
            dispatch({
              type: "info",
              message: "Removed all current modals",
            });
          }}
        >
          Close all modals
        </button>
      </Modal>
    </div>
  );
};

export default Home;
