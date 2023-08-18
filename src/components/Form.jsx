import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
          <div className="flex flex-row relative items-center gap-2 bg-white px-4 py-2 rounded-full">
            <select
              name="dropdown"
              id=""
              className="flex flex-row justify-center appearance-none"
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
        </div>
        <button className="px-8 py-2 rounded-full bg-slate-600 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
