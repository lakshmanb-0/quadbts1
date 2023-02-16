import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ShoeContainer from "./ShoeContainer";

const AllCollections = () => {
  const data = [
    {
      id: 1,
      image:
        "https://static.nike.com/a/images/t_default/471bffe8-9757-4b0e-8416-8ed1a9e5c7d0/pegasus-39-road-running-shoes-kmZSD6.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
    {
      id: 2,
      image:
        "https://static.nike.com/a/images/t_default/561d8b68-bc31-498c-a360-882b4f5ab3d9/air-max-270-shoes-GMBL00.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
    {
      id: 3,
      image:
        "https://static.nike.com/a/images/t_default/5ef51823-5a3d-406f-a652-f0d879d9bc0e/air-max-plus-shoes-04K813.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
    {
      id: 4,
      image:
        "https://static.nike.com/a/images/t_default/061b64b5-fa67-4177-be5d-675e88208bc7/waffle-one-se-shoe-8Qm3Hr.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
    {
      id: 5,
      image:
        "https://static.nike.com/a/images/t_default/c76f327f-df66-43fb-840e-9e1b25793cb2/streakfly-road-racing-shoes-V17qZm.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
    {
      id: 6,
      image:
        "https://static.nike.com/a/images/t_default/4abef2ff-4802-470e-9414-86d8d70fff6c/air-max-dawn-shoe-7r9R5R.png",
      title: "Nike Air Max 270 React",
      price: "280.00",
    },
  ];
  return (
    <section className="max_width py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-bold text-4xl">All Collections</h1>
        <p className="max-w-[25rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          reiciendis ullam excepturi.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 gap-4">
        {data.map((item) => (
          <ShoeContainer key={item.id} item={item} large={true} />
        ))}
      </div>
      <div className="py-5 border-y border-black/50">
        <button className="more_btn mx-auto">
          DISCOVER ALL PRODUCTS <BsArrowRight />
        </button>
      </div>
    </section>
  );
};

export default AllCollections;
