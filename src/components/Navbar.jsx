import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className="flex justify-between gap-4 px-4 py-7 max_width">
      <div className="flex gap-4 font-semibold">
        <h5 className="cursor-pointer">Our Collections</h5>
        <h5 className="cursor-pointer">About Us</h5>
      </div>
      <div className="h-[2rem] hidden sm:block">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/640px-Logo_NIKE.svg.png"
          alt="logo"
        />
      </div>
      <div className="flex gap-1 items-center bg-black text-white px-4 py-1 text-sm rounded-full cursor-pointer">
        <FaShoppingBag /> <span>Cart</span>
      </div>
    </section>
  );
};

export default Navbar;
