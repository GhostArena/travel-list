import React from "react";

//Dummy Information
// const initialList = [
//   { id: 1, description: "Passports", packed: true },
//   { id: 2, description: "Cups", packed: false },
//   { id: 3, description: "Toiletries", packed: false },
//   { id: 4, description: "Books", packed: true },
// ];

const Lists = ({ items, onDeleteItem, onTick }) => {
  return (
    <div className="bg-[#5b3d1c] text-white px-[20%] py-8 h-[60vh] w-full">
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
    </div>
  );
};

export default Lists;
