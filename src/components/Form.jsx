import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Form = () => {
  return (
    <div className="bg-[#ff8f34] w-full h-[10vh] flex items-center justify-center">
      <form
        action=""
        className="flex flex-row gap-6 items-center justify-center "
      >
        <h2>What do you need for your trip?</h2>
        <div className="flex flex-row relative items-center gap-2 bg-white px-4 py-2 rounded-full">
          <select
            name="dropdown"
            id=""
            className="flex justify-center appearance-none"
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
          className="px-10 py-2 rounded-full"
        />
        <button className="px-8 py-2 rounded-full bg-slate-600 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
