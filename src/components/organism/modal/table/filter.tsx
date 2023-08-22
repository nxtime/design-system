import Select from "@/components/molecule/select";
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
          <div className="container row center" key={item}>
            <span>{item}</span>
            <Select variant="base-300" items={["Expected", "Overhelmed", "Below Expectation"]} />
          </div>
        );
      })}
      <button className="btn btn-primary btn-ring-info" onClick={closeModal}>
        Save
      </button>
    </Modal>
  );
};

export default TableConfigModal;
