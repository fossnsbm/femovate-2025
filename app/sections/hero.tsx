import React from "react";
import BlurText from "../motions/blurtext";
import Image from "next/image";
function Hero() {
  return (
    <div
      id="hero"
      className="relative flex items-end justify-center h-[80vh] rounded-b-4xl sm:rounded-b-3xl md:rounded-b-4xl "
      style={{ backgroundColor: "#650E17" }}
    >
      <img
        src="/name.png"
        alt="Name Image"
        className="absolute top-0 left-0 h-20 sm:h-28 md:h-40 w-auto z-20 "
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        {/* <span
          className=" text-4xl md:text-7xl font-bold text-white leading-tight -translate-y-2 sm:-translate-y-0.5 md:-translate-y-10"
          style={{ color: "#E6DBCE" }}
        >
          EMPOWERING MINDS <br />
          THROUGH CREATIVE SOLUTIONS
        </span> */}
 
       <BlurText
          text="EMPOWERING MINDS 
          "
          delay={150}
          animateBy="words"
          direction="top"
          className=" text-5xl md:text-7xl font-bold text-[#E6DBCE] leading-tight -translate-y-2 sm:-translate-y-0.5 md:-translate-y-10 "
        />  
        <BlurText
          text="THROUGH CREATIVE SOLUTIONS   "
          delay={180}
          animateBy="words"
          direction="top"
          className=" text-5xl md:text-7xl font-bold text-[#E6DBCE] leading-tight -translate-y-2 sm:-translate-y-0.5 md:-translate-y-10 "
        /> 
      </div>
  {/* <img src="/lady new.png" alt="Hero Image" /> */}

  <Image 
    src="/lady new.png"
    alt="Hero Background"
    width={500}
    height={1080}
    className= "inset-0  bottom-0 "
  /> 
      
    </div>
  );
}

export default Hero;
