import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ShoeContainer = ({ item, large, back }) => {
  return (
    <section className={`bg-light_grey relative ${back ? "" : "p-5"}`}>
      {back ? (
        <div className="h-[20rem]">
          <img src={item.back} alt="" />
        </div>
      ) : (
        <div className="h-[20rem] w-fit mx-auto">
          <img src={item.image} alt="" />
        </div>
      )}

      <div
        className={`flex justify-between gap-4 font-bold text-xl ${
          back ? "absolute bottom-3 w-full px-4" : ""
        }`}
      >
        <h1>{item.title}</h1>
        <h1>${item.price}</h1>
      </div>
      <div className="absolute top-4 right-3 bg-white rounded-full flex items-center gap-1 px-3 py-2 text-sm">
        <HiOutlineShoppingBag className="text-xl" />
        {!large && "Add to Cart"}
      </div>
    </section>
  );
};

export default ShoeContainer;
