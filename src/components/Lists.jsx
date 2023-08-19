import React from "react";

//Dummy Information
// const initialList = [
//   { id: 1, description: "Passports", packed: true },
//   { id: 2, description: "Cups", packed: false },
//   { id: 3, description: "Toiletries", packed: false },
//   { id: 4, description: "Books", packed: true },
// ];

const Lists = ({ items }) => {
  return (
    <div className="bg-[#5b3d1c] text-white px-[20%] py-8 h-[60vh] w-full">
      <ul className="flex flex-wrap flex-col sm:flex-row items-center gap-2 justify-start">
        {items.map((item) => {
          return (
            <li key={item.id} className="px-8 flex">
              <p>
                <span>{item.quantity} </span>
                <span
                  className="mr-4"
                  style={item.packed ? { textDecoration: "line-through" } : {}}
                >
                  {item.description}
                </span>
              </p>
              <button>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
