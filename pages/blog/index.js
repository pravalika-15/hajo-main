import React from "react"
import BlogCard from "../../components/BlogCard";
// import BlogForm from "../components/BlogForm"
import NavBar from "../../components/NavBar"
// import Link from "next/link"
import Router from "next/router";
import { useRouter } from "next/router";
import WriteReview from "../../components/WriteReviewBtn"
// import Link from "next/link";
import { useState } from "react";
import BlogDetail from "./[blogs]";

export default function Blog(){
    
    return(
        <div>   
                <NavBar />
                <div id="bgClr" className="h-screen">
                {/* <div className="float-right ">
                    <WriteReview/>  */}
                    {/* </div> */}
                <div className="items-center justify-center font-sans w-full pl-60 pt-10">
                    <p className="text-4xl bold"> Blogs: </p>
                    <p className="text-xl ">Checkout all the blog reviews about HaJo</p>
                </div>

                    <BlogCard/>
                </div>
        </div>

    )
}

