import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function BlogCard(){
    const [blog, setBlog] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function fetchBlog() {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setBlog(data);
    }
    const router = useRouter();
    const path = "../blog/"

    useEffect(()=>{
        fetchBlog();
    }, [])
    return(
        <div className="justify-center items-center">
                      
         
        {/* <button onClick={fetchBlog} clicked="true">fetchBlog</button>  */}
           {blog.map((blog) =>
           {
               return(
                   <>
                   <div className=" w-screen flex justify-center" >
                       <div  onClick={() => router.push(path + blog.blogTitle)}  className="hover:bg-lime-100/10 shadow-lg hover:shadow-2xl justify-center mx-10 my-10 md:mx-1/3 md:my-10 md:px-2 md:py-2 sm:mx-60 sm:my-10 rounded overflow-hidden">
                           <div className="justify-center px-6 py-4">
                               <div className="font-bold text-2xl mb-2">{blog.blogTitle}</div>
                               <p className="text-gray-700 text-base pt-2">
                                   {blog.Content.substring(0,500)}...
                               </p>
                           </div>
                           <div className="px-6 pt-4 pb-2">
                               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">User Name</span>
                               <div onClick={() => router.push(path + blog.blogTitle)} className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 no-underline" href="">Read more </div>
                           </div>
                       </div>
                   </div>
                   </>
                   
               )
           })}

   </div>
    )
}

export default BlogCard;