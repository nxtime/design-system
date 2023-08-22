import Table from "@/components/organism/table";
import { addressesMocked } from "../mocked/addresses";

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const products = [
  "Milk",
  "Smartphone",
  "Notebook",
  "VideoGame",
  "Desktop",
] as const;

const itemTemplate = (index: number) => ({
  id: Math.floor(Math.random() * 10000) + 1,
  product: {
    name: products[Math.floor(Math.random() * 3)],
    qty: Math.floor(Math.random() * 50),
  },
  person: {
    name: "Lucas",
    age: index,
    email: "lucas@email.com",
  },
  address: addressesMocked[Math.floor(Math.random() * 10)],
});

const data = Array.from({ length: 4000 }, (_, index) =>
  itemTemplate(index + 1),
);

const shuffledData = shuffleArray([...data]);

const possibleValues = ["age", "name", "email"] as const;

const TablePresentation = () => {
  return (
    <div
      className="container"
      style={{ flex: 1, height: "auto", overflow: "hidden" }}
    >
      <Table
        data={shuffledData}
        hideColumn={["id"]}
        dataConfig={{
          person: (item) => item.name,
          address: (item) => item.city,
        }}
      />
    </div>
  );
};

export default TablePresentation;
