import Modal from "../../../components/organism/modal";

const LogoutModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <Modal currentName="logout">
      <h3 className="">Are you sure you want to logout?</h3>
      <div className="container row">
        <button className="btn btn-neutral" onClick={closeModal}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={closeModal}>
          Sure
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
