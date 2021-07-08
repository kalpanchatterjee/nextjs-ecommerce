import React from "react";
import Image from "next/image";

const HomePage = ({ data, count, setCount }) => {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster mt-1 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  left-0 top-0  inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      {data.map((value, index) => {
        return (
          <div key={index} className="tracking-widest text-black-300 p-3">
            <div className="mx-5">
              <Image src={value.image} height={150} width={150}></Image>
            </div>
            <p className="truncate max-w-md">{value.title}</p>
            <p className="truncate max-w-md">{value.description}</p>
            <div className="flex min-w-full justify-between pt-2 cursor-pointer">
              <p>{value.price}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 items-end mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                title="Add to Cart"
                onClick={() => setCount(count + 1)}
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
