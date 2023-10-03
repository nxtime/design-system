import type { TTableConfig, TTableConfigProps } from "../../table";
import Select from "../../../molecule/select";
import Modal from "..";
import { translate } from "translation-system";
import { Dispatch, SetStateAction, useState } from "react";
import { defaultColors } from "../../../../utils/colors";
import { Icon } from "@iconify/react";

const conditionsTypes = [
  "none",
  "greater",
  "greaterOrEqual",
  "lesser",
  "lesserOrEqual",
  "equal",
  "different",
] as const;

export type TConditionTypes = (typeof conditionsTypes)[number];

const conditionIcons: { [K in TConditionTypes]: string } = {
  greater: "ic:round-greater-than",
  greaterOrEqual: "ic:round-greater-than-equal",
  lesser: "ic:round-less-than",
  lesserOrEqual: "ic:round-less-than-equal",
  different: "ic:round-not-equal",
  equal: "iconamoon:sign-equal-bold",
  none: "mdi:border-none-variant",
};

const conditions = conditionsTypes.map((condition) => ({
  type: condition,
  icon: conditionIcons[condition],
}));

const TableConfigModal = <T extends TTableConfig<T>>({
  closeModal,
  config,
  updateConfig,
  hidden,
  translationPrefix,
  translation,
}: {
  closeModal: () => void;
  config: TTableConfig<T>;
  updateConfig: Dispatch<SetStateAction<TTableConfig<T>>>;
  hidden: (keyof T)[];
  translation?: string;
  translationPrefix?: string;
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

  console.log("Translation: ", translation, translationPrefix);

  return (
    <Modal currentName="table-config-modal">
      <div className="table-config custom-scroll">
        {/*<div>
           <span>Props</span>
           <span>{translate("common.condition")}</span>
           <span>{translate("common.value")}</span>
           <span>{translate("common.color")}</span>
         </div> */}
        {(Object.keys(internalConfig) as (keyof T)[]).map((item, index) => {
          if (hidden.includes(item)) return null;
          const currentCondition = conditions.findIndex(
            (condition) =>
              condition.type ===
              config[item as keyof TTableConfig<T>].condition,
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
                  checked={internalConfig[item].enabled}
                  className="checkbox checkbox-base-200"
                  onChange={() =>
                    updateConfigProp(item, {
                      enabled: !internalConfig[item].enabled,
                    })
                  }
                />
                <label htmlFor={item as string}>
                  {translate(
                    `${translationPrefix}.${translation}.${item as string}` as "common.ok",
                  )}
                </label>
              </div>
              <Select
                selected={currentCondition}
                selector={"type"}
                style={{ width: "24ch" }}
                variant="primary"
                keyExtractor={(item) => (
                  <div className="container row center">
                    <Icon icon={item.icon} />
                    <span>{translate(`conditions.${item.type}`)}</span>
                  </div>
                )}
                items={conditions}
                onChange={(_, condition) => {
                  updateConfigProp(item, {
                    condition: condition?.type,
                  });
                }}
                disabled={!internalConfig[item].enabled}
              />
              <input
                type="number"
                className="input input-base-200"
                defaultValue={internalConfig[item].value}
                style={{ color: "var(--text-content)" }}
                placeholder="Ex:. 200"
                onChange={(e) => {
                  updateConfigProp(item, {
                    value: Number(e.target.value),
                  });
                }}
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
                onChange={(_, color) => {
                  updateConfigProp(item, {
                    color,
                  });
                }}
                disabled={!internalConfig[item].enabled}
              />
            </div>
          );
        })}
      </div>
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
