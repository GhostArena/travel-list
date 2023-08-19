import React from "react";

//Dummy Information
// const initialList = [
//   { id: 1, description: "Passports", packed: true },
//   { id: 2, description: "Cups", packed: false },
//   { id: 3, description: "Toiletries", packed: false },
//   { id: 4, description: "Books", packed: true },
// ];

const Lists = ({ items, onDeleteItem, onTick }) => {
  // const sortBy = items.filter([]);
  return (
    <div className="flex bg-[#5b3d1c] text-white px-[20%] py-8 h-[60vh] w-full relative items-start justify-center">
      <ul className="flex flex-wrap flex-col sm:flex-row items-center gap-2 justify-start">
        {items.map((item) => {
          return (
            <li key={item.id} className="px-8 flex">
              <input
                type="checkbox"
                name=""
                value={item.packed}
                className="mr-2"
                onChange={() => onTick(item.id)}
              />
              <span
                className="mr-2"
                style={item.packed ? { textDecoration: "line-through" } : {}}
              >
                {item.quantity} {item.description}
              </span>
              <button onClick={() => onDeleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>

      <div className="absolute flex gap-4 bottom-8">
        <select
          value=""
          id=""
          className="flex flex-row justify-center appearance-none bg-yellow-300 px-4 py-2 rounded-full text-black font-medium"
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description Order</option>
          <option value="packed">Sort by Packed Order</option>
        </select>
        <button className="bg-yellow-300 px-4 py-2 rounded-full text-black font-medium">
          Clear Entire List
        </button>
      </div>
    </div>
  );
};

export default Lists;
