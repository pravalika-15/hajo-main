import Image from "next/image";
import React from "react";
import trips from "../public/trips.png";

function Welcome() {

  const handleClick = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };

  return (
    <div className="flex w-full flex-col items-center m-4 mt-16">
      <div className="text-gray-800 font-bold text-5xl">
        Let Us Help You To Get To Your Destination.
      </div>
      <button
        onClick={handleClick}
        className="rounded-lg text-lg p-5 my-10 hover:bg-white hover:text-black font-bold hover:shadow-lg transition-all hover:scale-x-105 shadow-md hover:border-black border bg-black border-white text-white"
      >
        Book a Ride
      </button>
      <Image src={trips} alt="Image of cartoon" height={500} width={500} />
    </div>
  );
}

export default Welcome;
