import React from "react";

const Footer = () => {
  return (
    <footer className="h-[10vh] w-full flex items-center justify-center bg-black text-white px-4 py-8">
      <p className="italic">
        🧳 You have X items on your list, and you've packed X (X%)
      </p>
    </footer>
  );
};

export default Footer;
