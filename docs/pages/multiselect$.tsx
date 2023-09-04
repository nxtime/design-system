import React, { useState } from "react";
import { MultiSelect } from "design-system";

const animals = [
  {
    name: "Elephant",
    age: 20,
  },
  {
    name: "Giraffe",
    age: 18,
  },
  {
    name: "Dog",
    age: 12,
  },
  {
    name: "Penguin",
    age: 5,
  },
  {
    name: "Cat",
    age: 12,
  },
  {
    name: "Bird",
    age: 2,
  },
];

const MultiSelectComponent = () => {
  const [currentSelected, changeSelected] = useState(1);
  return (
    <div>
      <h2 className="title">
        Current selected Animal: {animals[currentSelected].name}
      </h2>
      <MultiSelect
        items={animals}
        selector="name"
        onChange={(_index, _item, selected) => {
          console.log(_index, _item);
          console.log(animals.filter((_, index) => selected?.includes(index)));
        }}
      />
      <button className="btn btn-primary" onClick={() => changeSelected(2)}>
        Dog
      </button>
    </div>
  );
};

export default MultiSelectComponent;
