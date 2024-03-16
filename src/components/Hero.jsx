import React from "react";
import { LuDot } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
const Hero = () => {
  return (
    <div className="header-bg sm:hidden block px-1 relative">
      <img
        src="/Vijay.jpg"
        alt="Vijay"
        className="  w-full h-full rounded-xl"
      />

      <div className=" absolute w-full  left-1/2 bottom-10 transform -translate-x-1/2 flex flex-col gap-3 justify-center items-center bg-transparent">
        <p className=" flex gap-1 items-center">
          {" "}
          <span>Deadpen</span> <LuDot color="white" size={15} />
          <span>Quirkly</span>{" "}
        </p>
        <div className=" flex gap-1">
          {" "}
          <button className=" w-1/2 bg-white flex gap-1 items-center text-black rounded px-6 py-2 ">
            {" "}
            <FaPlay color="black" size={20} /> PLay
          </button>
          <button className=" text-white w-1/2 bg-gray-700 flex gap-1 items-center whitespace-nowrap py-2 rounded px-6 ">
            {" "}
            <GoPlus color="white" size={20} /> My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
