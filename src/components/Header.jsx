import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Header = () => {
  return (
    <section className="h-screen relative">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
        alt="header_img"
      />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full bg-white text-xl p-4">
        <BsFillPlayFill />
      </div>
      <div className="absolute top-[80%] left-4 rounded-full border border-black w-24 h-24 flex justify-center items-center text-white">
        <span>&lt; </span>
        <span> Drag </span>
        <span> &gt;</span>
      </div>
    </section>
  );
};

export default Header;
