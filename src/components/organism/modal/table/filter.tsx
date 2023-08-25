import Select from "../../../molecule/select";
import Modal from "..";

const TableConfigModal = ({
  closeModal,
  config,
}: {
  closeModal: () => void;
  config: string[];
}) => {
  return (
    <Modal currentName="table-config-modal">
      {config.map((item) => {
        return (
          <div className="container row between-center" key={item}>
            <span>{item}</span>
            <Select
              variant="neutral"
              items={["Expected", "Overhelmed", "Below Expectation"]}
            />
          </div>
        );
      })}
      <button className="btn btn-primary ring-info" onClick={closeModal}>
        Save
      </button>
    </Modal>
  );
};

export default TableConfigModal;
