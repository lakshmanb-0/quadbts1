import React from "react";

const Showroom = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.solecollector.com/complex/images/bhlnyc9pfehowhfjynan/nike-air-max-1-curry-2003",
      title: "Nike Air Showroom",
    },
    {
      id: 2,
      image:
        "https://fashionsmantra.in/wp-content/uploads/2019/11/Nike-Air-Zoom-Vomero-14-best-running-shoe-2018-men-Training-Shoes.jpg",
      title: "Monscler Showroom",
    },
  ];

  return (
    <section className="max_width py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-bold text-4xl">Our Showrooms</h1>
        <p className="max-w-[25rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          reiciendis ullam excepturi.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 py-5 gap-4 relative">
        {data.map((item) => (
          <div key={item.id} className="relative">
            <div className="h-[20rem]">
              <img src={item.image} alt="" />
            </div>
            <h1 className="absolute bottom-3 left-5 z-10 text-white font-semibold text-xl">
              {item.title}
            </h1>
          </div>
        ))}
      </div>

      {/* banner  */}
      <section className="bg-black text-white grid sm:grid-cols-2 py-10 px-4 place-items-center mt-10 gap-8">
        <div className="max-w-[21rem]">
          <h1 className="font-bold text-5xl sm:text-6xl">Become A members</h1>
          <p className="text-light_grey py-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            soluta repellendus nam.
          </p>
          <button className="bg-white px-6 py-2 rounded-full text-black font-bold text-sm">
            JOIN NOW
          </button>
        </div>
        <div>
          <img src="https://pngimg.com/uploads/nike/nike_PNG9.png" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Showroom;
