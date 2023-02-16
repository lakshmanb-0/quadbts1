import React from "react";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
import ShoeContainer from "./ShoeContainer";

const PopularCollection = () => {
  const data = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
    {
      id: 2,
      image:
        "https://static.nike.com/a/images/t_default/ac871484-8738-44cf-abbd-4d347ad536e9/revolution-6-flyease-next-nature-easy-on-off-road-running-shoes-XvR99K.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
  ];

  return (
    <section className="max_width py-10">
      <div className="flex justify-between items-center gap-5">
        <h1 className="section_heading">Popular Collections</h1>
        <button className="more_btn ">
          DISCOVER ALL PRODUCTS <BsArrowRight />
        </button>
      </div>
      <div className="grid  sm:grid-cols-2 py-5 gap-4 relative">
        {data.map((item) => (
          <ShoeContainer key={item.id} item={item} />
        ))}
        <button className="hidden sm:block absolute top-[50%] -translate-y-[50%] -right-3 bg-black text-white text-4xl rounded-full p-4">
          <BsArrowRightShort />
        </button>
      </div>
    </section>
  );
};

export default PopularCollection;
