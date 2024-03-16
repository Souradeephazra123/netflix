"use client";
import React, { useRef, useState } from "react";

const SliderComponent = ({ child }) => {
  const containerRef = useRef(null);

  const [startX, setstartX] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(0);

  const handleRightButtonClick = () => {
    const container = containerRef.current;
    const scrollAmount = 500;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };
  const handleLeftButtonClick = () => {
    const container = containerRef.current;
    const scrollAmount = 500;
    container.scrollTo({
      left: container.scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => {
    setstartX(e.touches[0].pageX);
    setscrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className="relative">
        <div
          className=" flex mt-5 overflow-x-auto relative bloc-tabsnone"
          ref={containerRef}
          // style={{ overflow: "hidden" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="flex space-x-1">{child}</div>
        </div>
       
      </div>
    </>
  );
};

export default SliderComponent;
