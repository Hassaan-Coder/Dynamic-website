import React from "react";

const MyBtn = ({ textContent }) => {
  return (
    <div
      className={` bg-black cursor-pointer px-3 text-white font-bold text-center hover:shadow-lg shadow-turbo-pink-500 hover:ring-turbo-pink-500 hover:ring-offset-2 hover:ring-2 rounded-full p-2 `}
    >
      {textContent}
    </div>
  );
};

export default MyBtn;
