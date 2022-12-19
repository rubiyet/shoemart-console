import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function TopBanner() {
  return (
    <div className="relative">
      <Image
        src="/background.png"
        alt="banner"
        width={1920}
        height={1080}
        className="w-full h-[45rem] object-cover object-right-bottom"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-[47rem] h-full flex items-center justify-center">
        <div className="pl-36 text-left space-y-16">
          <h1 className="text-6xl text-white font-bold">Welcome to ShoeMart</h1>
          <p className="text-2xl text-white text-justify">
            Deals up to 75% off along with FREE Shipping above ৳50 on shoes,
            boots, sneakers, and sandals at ShoeMart.
          </p>
          <button className={`h-11 px-8 rounded-md text-white bg-orange-600 space-x-2`}>
            <span>Shop Now</span>
            <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
