import React from 'react'
import LazyLoad from 'react-lazy-load';
import 'animate.css';
import coverImage from '../assets/hero_section.png'
import Loader from './Loader';

const Hero = () => {
  return (
  <section>
    <div className='relative  w-full '>
    
    <img src={coverImage} alt="image" className='object-cover w-full max-h-[800px] min-h-[450px] rounded-xl md:rounded-2xl xl:rounded-3xl absolute mix-blend-overlay opacity-60 sm:opacity-70 md:opacity-80 '/>
 
      <div className="pt-10 grid place-items-center gap-4">
      <h1 className="text-4xl font-bold  text-center  text-purple-800 lg:text-6xl xl:text-9xl ">Home Furnish</h1>
      <h3 className="text-center font-bold text-2xl text-yellow-900">Your Home, Your Style</h3>
      
      <button className='animate__animated animate__backInUp bg-purple-800 px-8 md:px-10 lg:font-bold lg:tracking-wider py-5 text-white text-xl rounded-lg cursor-pointer xl:text-2xl'>Start</button>
      <h3 className="text-center text-lg text-purple-800 font-semibold mt-4 sm:hidden">Upgrade your lifestyle with our furniture now!</h3>
      </div>
        
    </div>
    </section>
  )
}

export default Hero