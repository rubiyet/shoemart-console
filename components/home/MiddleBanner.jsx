import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function MiddleBanner() {
  return (
    <div className="relative">
      <Image
        src="/2.jpg"
        alt="banner"
        width={1920}
        height={1080}
        className="w-full h-[25rem] object-cover object-right-bottom"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-[53rem] h-full flex items-center justify-center">
        <div className="pl-36 text-left space-y-16">
          <p className="text-5xl text-white text-justify leading-normal">
            Sneakers Never Run Out Of Style <br/> Get 50% Off Site wide.
          </p>
          <button
            className={`h-11 px-8 rounded-md text-white bg-orange-600 space-x-2`}
          >
            <span>Start Shopping</span>
            <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
