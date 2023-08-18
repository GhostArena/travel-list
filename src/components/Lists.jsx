import React from "react";

//Dummy Information
const initialList = [
  { id: 1, description: "Passports", packed: true },
  { id: 2, description: "Cups", packed: false },
  { id: 3, description: "Toiletries", packed: false },
  { id: 4, description: "Books", packed: true },
];

const Lists = () => {
  return (
    <div className="bg-[#5b3d1c] text-white px-[20%] py-8 h-[60vh] w-full">
      <ul className="flex flex-col sm:flex-row items-center gap-4 justify-between">
        {initialList.map((list) => {
          return (
            <li key={list.id}>
              <span
                className="mr-4"
                style={list.packed ? { textDecoration: "line-through" } : {}}
              >
                {list.description}
              </span>
              <button>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
