import React from "react";

function Hero() {
  return (
    <div
      className="relative flex items-end justify-center h-[80vh] rounded-b-4xl sm:rounded-b-3xl md:rounded-b-4xl"
      style={{ backgroundColor: "#650E17" }}
    >
      
      <img
        src="/name.png"
        alt="Name Image"
        className="absolute top-0 left-0 h-20 sm:h-28 md:h-40 w-auto z-20"
      />

      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <span
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight -translate-y-2 sm:-translate-y-0.5 md:-translate-y-10"
          style={{ color: "#E6DBCE" }}
        >
          EMPOWERING MINDS <br />
          THROUGH CREATIVE SOLUTIONS
        </span>
      </div>

     
      <img
        src="/lady new.png"
        alt="Hero Image"
        
      />
    </div>
  );
}

export default Hero;