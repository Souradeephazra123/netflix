import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterContent } from "./data";
const Footer = () => {
  return (
    <div className=" bg-black sm:px-24 px-5 py-5 pt-32 flex flex-col gap-3 text-white text-sm font-medium">
      <div className=" flex gap-5">
        <FaFacebookF color="white" size={20} />
        <FaInstagram color="white" size={20} />
        <FaTwitter color="white" size={20} />
        <FaYoutube color="white" size={20} />
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 sm:grid-rows-3 gap-5">
        {FooterContent.map((item, idx) => (
          <div className="justify-start">
            <p className="text-white">{item}</p>
          </div>
        ))}
      </div>
      <button className=" border-2 border-white w-fit p-1">Service Code</button>
      <p>
        {" "}
        <span className=" text-white">©</span> 1997-2024 Netflix Inc.
      </p>
      {/* <span className=" w-fit text-9xl text-white border border-gray-500 inline-block">
        1
      </span> */}
    </div>
  );
};

export default Footer;
