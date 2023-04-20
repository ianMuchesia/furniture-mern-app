import React from "react";
import LazyLoad from "react-lazy-load";
import "animate.css";
import { hero_section } from "../../assets";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

const Hero = () => {
  const authenticated = useAppSelector(state=>state.auth.isAuthenticated)
  return (
    <div>
      <div className="relative  w-full min-h-[250px] max-h-[650px] ">
        <img
          src={hero_section}
          alt="image"
          className="object-cover w-full  max-h-[650px] rounded-xl md:rounded-2xl xl:rounded-3xl min-h-[250px] "
        />

        <div className="pt-10 absolute top-0 left-0 right-0 bottom-0  bg-black/50  flex flex-col items-center justify-center rounded-xl md:rounded-2xl xl:rounded-3xl px-10 ">
          <h4 className="text-white font-bold text-center text-[10px] md:text-base lg:text-lg lg:max-w-[60%]">
            Welcome to Home Furnish - Your One-Stop Destination for Exquisite
            Furniture Shopping, Design Inspiration, and Expert Advice
          </h4>
          <h1 className="text-[30px] text-white/90 sm:text-[60px] md:text-[70px] font-bold lg:text-[100px] lg:text-white/75">Home Furnish</h1>
          <div className="flex justify-between">
          <Link to="/Products">  <button className="px-3 py-2 text-lg bg-purple-800 text-white border-0 rounded-[5px] m-2 sm:px-8 sm:py-4 sm:text-[20px] md:text-[32px] md:font-bold md:tracking-widest
             hover:bg-white hover:text-black transition duration-300 ease-in-out">START</button></Link>
            <Link to={`${authenticated?"/Profile":"/Login"}`} ><button className="px-3 py-2 text-lg bg-yellow-400 text-white border-0 font-bold rounded-[2px] m-2 sm:px-8 sm:py-4 sm:text-[20px] md:text-[32px] md:font-bold md:tracking-widest hover:bg-purple-800 transition duration-300 ease-in-out">{authenticated? "Profile":"Login"}</button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
