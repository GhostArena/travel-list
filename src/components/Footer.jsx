import React from "react";

const Footer = ({ items }) => {
  const packedList = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentage = (numberPacked / packedList) * 100;
  return (
    <footer className="h-[10vh] w-full flex items-center justify-center bg-black text-white px-4 py-8">
      {percentage === 100 ? (
        <p className="italic">You're ready to go 🚀</p>
      ) : (
        <p className="italic">
          🧳 You have {packedList} items on your list, and you've packed
          <span> {numberPacked}</span> ({Math.round(percentage)}%)
        </p>
      )}
    </footer>
  );
};

export default Footer;
