import React from "react"
import BlogForm from "../components/BlogForm"
import NavBar from "../components/NavBar"


export default function Review(){
    return(
        <div className="p-0 m-0">
            <NavBar />
            <div id="bgClr" className="h-screen">
                <div >
                    <BlogForm />
                </div>
            </div>

        </div>
    )
}