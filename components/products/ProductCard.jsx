import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ product }) {
  console.log(product);
  const { name, price, image, id } = product;
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);

  const handleProduct = (e) => {
    e.preventDefault();
    window.location.href = `/product/${id}`;
  };

  return (
    <div className="">
      <div className={`w-[16.7rem] h-64 bg-gray-100 rounded-lg shadow relative hover:bg-zinc-500 hover:opacity-80`}>
        <Image
          src={image}
          alt="product"
          width={300}
          height={300}
          className={`w-[16.7rem] h-64 rounded-lg`}
          // onClick={handleProduct}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        {isShown && (
          <div className="absolute top-[7.5rem] left-[3.5rem]">
            <button
              className={`h-11 px-8 rounded-md text-white font-semibold text-sm bg-orange-600`}
              // onClick={handleLogIn}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              ADD TO CARD
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-gray-600 font-semibold text-sm w-52 truncate">{name}</h3>
        <span className="text-orange-600 bg-orange-100 p-1 rounded-lg font-semibold text-sm">
          ৳{price}
        </span>
      </div>
    </div>
  );
}
