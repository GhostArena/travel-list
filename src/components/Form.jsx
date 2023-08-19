import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Guard Clause
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  

  return (
    <div className="bg-[#ff8f34] w-full h-full sm:h-[10vh] py-6 flex items-center justify-center">
      <form
        action=""
        className="flex sm:flex-row flex-col gap-2 items-center justify-center "
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl">What do you need for your trip?</h2>
        <div className="flex flex-row gap-2 mb-8 sm:mb-0">
          <div className="flex flex-row relative items-center gap-2 bg-[#ffba20] px-4 py-2 rounded-full">
            <select
              name="dropdown"
              id=""
              className="flex flex-row justify-center appearance-none bg-none"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                return (
                  <option value={num} key={num}>
                    {num}
                  </option>
                );
              })}
            </select>
            <AiFillCaretDown />
          </div>

          <input
            type="text"
            placeholder="Item..."
            className="px-6 py-2 rounded-full bg-[#ffba20]"
            value={description}
            onSubmit={handleSubmit}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="px-8 py-2 rounded-full bg-slate-600 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
