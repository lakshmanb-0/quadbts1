import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ShoeContainer from "./ShoeContainer";

const Trending = () => {
  const data = [
    {
      id: 1,
      back: "https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
    {
      id: 2,
      back: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
  ];
  return (
    <section className="max_width py-10">
      <div className="flex justify-between items-center gap-4">
        <h1 className="section_heading">Trending Now</h1>
        <button className="more_btn ">
          DISCOVER ALL PRODUCTS <BsArrowRight />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 py-5 gap-4">
        {data.map((item) => (
          <ShoeContainer key={item.id} item={item} back={true} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
