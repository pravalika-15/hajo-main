import React from "react";
import Router from "next/router";

const WriteReview = () => (
    <div
      onClick={() => Router.push("../writeReview")}
      className= "transition-all ease-in duration-75 m-2 p-2 rounded-lg bg-lime-300 hover:bg-green-600 font-bold hover:text-white border-2 border-lime-400 hover:shadow-xl  text-black shadow-md"
    >
    Write your Review!
    </div>
  );

  export default WriteReview;