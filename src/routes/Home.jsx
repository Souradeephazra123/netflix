import React,{ lazy} from "react";
const Caresoul = lazy(() => import("../components/Caresoul"));


const Home = () => {
  return (
    <div className="sm:pl-10 px-2 bg-black flex-col gap-8 flex   text-white font-bold">
      
      <div>
        <p>Made in Korea</p>
        <Caresoul />
      </div>
      <div>
        <p>Fresh Picks for You</p>
        <Caresoul />
      </div>
      <div>
        <p>Continue Watching for Jamal</p>
        <Caresoul />
      </div>
      <div>
        <p>Hindi Movies & TV</p>
        <Caresoul />
      </div>
      <div className=" gap-1">
        <p>Matched to You</p>
        <Caresoul />
      </div>
      <div className=" gap-1">
        <p>Top 10 movies in India Today</p>
        <Caresoul />
      </div>
      <div className=" gap-1">
        <p>30 minutes Laugh</p>
        <Caresoul />
      </div>
      <div className=" gap-1">
        <p>Critically Aclaimed TV Dramas</p>
        <Caresoul />
      </div>
      <div className=" gap-1">
        <p>TV Dramas</p>
        <Caresoul />
      </div>
      <div className=" gap-1">
        <p>Action TV</p>
        <Caresoul />
      </div>
    </div>
  );
};

export default Home;
