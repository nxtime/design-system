import Modal from "../../../components/organism/modal";

const UserModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <Modal currentName="user">
      <div className="divider">
        <h2>Recorrent user</h2>
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
        Update
      </button>
    </Modal>
  );
};

export default UserModal;
