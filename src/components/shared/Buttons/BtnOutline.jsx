import React from "react";

const BtnOutline = ({ children }) => {
  return (
    <div className="w-[170px] h-14 rounded bg-transparent hover:bg-primary-color hover:border-none border border-primary-color text-primary-color hover:text-white text-lg font-semibold flex items-center justify-center cursor-pointer transition duration-150 delay-75">
      {children}
    </div>
  );
};

export default BtnOutline;
