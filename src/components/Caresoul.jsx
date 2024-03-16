import React from "react";
import CardCarousel from "./atom/CardCarousel";
import Recommend from "./atom/recommend";
import { MadeInCorea } from "./data";
const Caresoul = () => {
  return (
    <div>
      <CardCarousel
        child={MadeInCorea.map((item) => (
          <Recommend data={item.img} />
        ))}
      />
    </div>
  );
};

export default Caresoul;
