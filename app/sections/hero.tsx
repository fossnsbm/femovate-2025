import React from "react";

function hero() {
  return (
    <div
      className="relative flex items-end justify-center h-[80vh] rounded-b-4xl"
      style={{ backgroundColor: "#650E17" }}
    >
      <img
        src="/name.png"
        alt="Name Image"
        className="absolute top-0 left-0 h-40 w-auto"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <span
          className="text-6xl font-bold relative -translate-y-10" // Moves text up by 2.5rem (40px)
          style={{ color: "#E6DBCE" }}
        >
          EMPOWERING MINDS <br />
          THROUGH CREATIVE SOLUTIONS
        </span>
      </div>

      <img src="/lady new.png" alt="Hero Image" className="h-3/4 w-auto" />
    </div>
  );
}

export default hero;
