import Select from "../../../molecule/select";
import Modal from "..";
import { translate } from "translation-system";
import type { TTableConfig, TTableConfigProps } from "../../table";
import { Dispatch, SetStateAction, useState } from "react";
import { defaultColors } from "../../../../utils/colors";

const conditionsTypes = [
  "none",
  "above",
  "aboveOrEqual",
  "less",
  "lessOrEqual",
  "equal",
  "different",
] as const;

const conditions = conditionsTypes.map((condition) => ({ type: condition }));

const TableConfigModal = <T extends TTableConfig<T>>({
  closeModal,
  config,
  updateConfig,
  hidden,
  translation,
}: {
  closeModal: () => void;
  config: TTableConfig<T>;
  updateConfig: Dispatch<SetStateAction<TTableConfig<T>>>;
  hidden: (keyof T)[];
  translation: string;
}) => {
  const [internalConfig, updateInternalConfig] = useState(config);

  const updateConfigProp = (
    item: keyof TTableConfig<T>,
    prop: Partial<TTableConfigProps>,
  ) => {
    updateInternalConfig((prev) => ({
      ...prev,
      [item]: {
        ...prev[item],
        ...prop,
      },
    }));
  };

  return (
    <Modal currentName="table-config-modal">
      {(Object.keys(internalConfig) as (keyof T)[]).map((item, index) => {
        if (hidden.includes(item)) return null;
        const currentCondition = conditions.findIndex(
          (condition) =>
            condition.type === config[item as keyof TTableConfig<T>].condition,
        );
        const currentColor = defaultColors.findIndex(
          (color) => color === internalConfig[item].color,
        );
        return (
          <div
            className={
              "container row row-selectable between-center" +
              (!internalConfig[item].enabled ? " row-disabled" : "")
            }
            key={index}
          >
            <div className="container row" style={{ alignItems: "center" }}>
              <input
                type="checkbox"
                name={item as string}
                id={item as string}
                className="checkbox checkbox-base-200"
                onChange={() =>
                  updateConfigProp(item, {
                    enabled: !internalConfig[item].enabled,
                  })
                }
              />
              <label htmlFor={item as string}>
                {translate(
                  `data.${translation}.${item as string}` as "common.ok",
                )}
              </label>
            </div>
            <Select
              selected={currentCondition}
              selector={"type"}
              style={{ width: "20ch" }}
              variant="neutral"
              items={conditions}
              disabled={!internalConfig[item].enabled}
            />
            <input
              type="number"
              className="input input-base-200"
              style={{ color: "var(--text-content)" }}
              placeholder="Ex:. 200"
            />
            <Select
              selected={currentColor}
              style={{ width: "20ch" }}
              variant="neutral"
              items={defaultColors}
              keyExtractor={(color) => (
                <span
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    backgroundColor: `var(--${color})`,
                  }}
                />
              )}
              disabled={!internalConfig[item].enabled}
            />
          </div>
        );
      })}
      <button
        className="btn btn-primary ring-info"
        onClick={() => {
          updateConfig(internalConfig);
          closeModal();
        }}
      >
        {translate("common.save")}
      </button>
    </Modal>
  );
};

export default TableConfigModal;
