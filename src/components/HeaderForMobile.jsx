import React, { useState } from "react";
import { MdOutlineCastConnected } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Hero from "./Hero";

const HeaderForMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Dropdown, setDropdown] = useState("Categories");
  const arr = ["New & Popular", "My List", "Language"];

  return (
    <div className=" sm:hidden header-bg px-4 py-5 flex flex-col gap-5 text-white">
      <div className=" flex justify-between">
        <p className=" text-2xl font-semibold font-sans">For Asli Jamaal🤣</p>
        <div className=" flex gap-3 items-center">
          <MdOutlineCastConnected color="white" size={20} />
          <IoSearchOutline color="white" size={25} />
        </div>
      </div>
      <div className=" flex justify-between">
        <button className=" rounded-full border border-white px-3">
          Tv shows
        </button>
        <button className=" rounded-full border border-white  px-3">
          Movies
        </button>
        <div>
          {" "}
          <button
            className=" relative border border-white rounded-full font-medium   px-3 text-center inline-flex items-center"
            type="button"
            data-dropdown-toggle="dropdown"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {Dropdown}{" "}
            <img src="/arrow.svg" className="w-4 h-4 ml-2" alt="arrow" />
          </button>
          {isOpen && (
            <div
              className="absolute mt-0 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
              id="dropdown"
            >
              <ul class="py-1" aria-labelledby="dropdown">
                {arr.map((item) => (
                  <li
                    onClick={() => {
                      setDropdown(item);
                      setIsOpen(!isOpen);
                    }}
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default HeaderForMobile;
