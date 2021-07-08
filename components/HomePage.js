import React from "react";
import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/outline";

const HomePage = ({ data, count, setCount }) => {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster mt-1 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  left-0 top-0  inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      {data.map((value, index) => {
        return (
          <div
            key={index}
            className="tracking-widest text-black-300 p-3 border-blue-100"
          >
            <div className="mx-5">
              <Image src={value.image} height={150} width={150}></Image>
            </div>
            <p className="truncate max-w-md">{value.title}</p>
            <p className="truncate max-w-md">{value.description}</p>
            <div className="flex min-w-full justify-between pt-2 cursor-pointer">
              <p>$ {value.price}</p>
              <ShoppingBagIcon
                className=""
                onClick={() => setCount(count + 1)}
                height={25}
                width={25}
                color="yellow"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
