import Modal from "../../../components/organism/modal";

const NewUserModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <Modal currentName="new-user">
      <div className="divider">
        <h2>Registering new user</h2>
      </div>
      <input
        type="text"
        className="input input-primary"
        placeholder="Type your username...."
      />
      <input
        type="email"
        className="input input-primary"
        placeholder="Type your mail...."
      />
      <button className="btn btn-primary" onClick={closeModal}>
        Save
      </button>
    </Modal>
  );
};

export default NewUserModal;
