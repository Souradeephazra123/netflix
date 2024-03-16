import React from "react";

const Recommend = ({ data }) => {
  return (
    <div
      className="rounded-md bg-white sm:w-[150px] w-[100px] sm:h-[100px] h-[150px]"
      style={{ scrollbarWidth: "none" }}
    >
      {" "}
      <div className=" flex justify-center items-center">
        <img
          src={data}
          width={150}
          height={40}
          alt="line"
          className=" sm:w-[150px] w-[150px]  sm:h-[100px] h-[150px] object-cover object-center rounded-md"
        />
      </div>
    </div>
  );
};

export default Recommend;
