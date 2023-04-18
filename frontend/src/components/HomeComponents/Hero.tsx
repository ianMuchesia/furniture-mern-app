import React from "react";
import LazyLoad from "react-lazy-load";
import "animate.css";
import { hero_section } from "../../assets";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="relative  w-full min-h-[250px] max-h-[650px] ">
        <img
          src={hero_section}
          alt="image"
          className="object-cover w-full  max-h-[650px] rounded-xl md:rounded-2xl xl:rounded-3xl min-h-[250px] "
        />

        <div className="pt-10 absolute top-0 left-0 right-0 bottom-0  bg-black/50  flex flex-col items-center rounded-xl md:rounded-2xl xl:rounded-3xl px-10 ">
          <h4 className="text-white font-bold text-center text-[10px] md:text-base lg:text-lg">
            Welcome to Home Furnish - Your One-Stop Destination for Exquisite
            Furniture Shopping, Design Inspiration, and Expert Advice
          </h4>
          <h1 className="text-[30px] text-white/90 font-bold">Home Furnish</h1>
          <div className="flex">
            <button className="px-3 py-2 text-lg bg-purple-800">START</button>
            <button className="">SIGN IN</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
