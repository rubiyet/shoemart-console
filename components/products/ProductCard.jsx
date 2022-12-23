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
    <div className="flex flex-col">
      <div className={`rounded-lg relative border-2 border-gray-200 hover:border-gray-300`}>
        <Image
          src={image}
          alt="product"
          width={500}
          height={300}
          className="rounded-lg"
          // onClick={handleProduct}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        {isShown && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              className={`h-11 w-32 px-8 sm:px-6 md:h-9 md:px-6 lg:h-11 rounded-md text-white font-semibold text-2xs bg-orange-600`}
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
