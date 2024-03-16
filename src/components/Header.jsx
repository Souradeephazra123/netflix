import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" hidden  bg-black px-10 py-5 sm:flex flex-row items-center justify-between">
      <div className=" flex gap-10">
        <div>
          <img
            src="/netflix.svg"
            alt="netflix"
            color="red"
            fill="red"
            className=" w-46 h-7"
          />
        </div>

        <ul className=" text-white flex items-center  gap-5 font-semibold">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/tv">TV Shows</Link>
          </li>
          <li>
            {" "}
            <Link to="/movie">Movies</Link>
          </li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className=" flex gap-4 items-center">
        <IoSearchOutline color="white" className=" w-8 h-8" />
        <p className=" text-white">Children</p>
        <div className=" relative">
          <FaRegBell color="white" className=" w-7 h-7" />
          <span className=" flex items-center justify-center text-[12px] object-center rounded-full p-1 bg-red-500 absolute top-0 right-0 w-5 h-5">
            3
          </span>
        </div>
        <img
          src="/profile.svg"
          alt=""
          width={40}
          height={50}
          className=" w-7 h-7"
        />
      </div>
    </header>
  );
};

export default Header;
