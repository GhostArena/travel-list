import React from "react";

const Footer = ({ items }) => {
  const packedList = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="h-[10vh] w-full flex items-center justify-center bg-black text-white px-4 py-8">
      <p className="italic">
        🧳 You have {packedList} items on your list, and you've packed
        <span> {numberPacked}</span> (
        {Math.floor((numberPacked / packedList) * 100)}%)
      </p>
    </footer>
  );
};

export default Footer;
