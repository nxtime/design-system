import React, { useState } from "react";
import { Select } from "design-system";

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
];

const SelectComponent = () => {
  const [currentSelected, changeSelected] = useState(0);
  return (
    <div>
      <h2 className="title">Current selected Animal: {animals[currentSelected].name}</h2> 
      <Select
        selected={currentSelected}
        selector="name"
        labelExtractor={(animal) => `${animal.name} - ${animal.age} yo`}
        keyExtractor={(animal) => `${animal.name} - ${animal.age} yo`}
        items={animals}
        onChange={(index) => changeSelected(index)}
      />
      <button className="btn btn-primary" onClick={() => changeSelected(2)}>
        Dog
      </button>
    </div>
  );
};

export default SelectComponent;
