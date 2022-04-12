import React, { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function BlogDetail(){
    const [liked, setLiked] = useState(null);
    const router = useRouter();
    const blogTitle = router.query.blogs
    const Content = router.query.Content
    return(
        <>
        <NavBar />
        <div className="flex justify-center" >
                       <div className="justify-center w-screen mx-60 my-20 rounded overflow-hidden shadow-lg ">
                           <div className="justify-center px-6 py-4">
                               <div className="font-bold text-9xl mb-2 font-sans">{blogTitle}</div>

                                    <div className="grid grid-cols-2 gap-4 py-12 px-5">
                                        <div>
                                           <img src="../../river.jpeg"/>
                                           <div className="grid grid-cols-2">

                                               <div>
                                                    <img src="../../river.jpeg"/>
                                               </div>

                                               <div>
                                                    <img src="../../river.jpeg"/>
                                               </div>

                                           </div>
                                        </div>

                                        <div>
                                            <h1 className="text-7xl font-sans py-5">Blog Sub Title</h1>
                                            <p className="py-5 text-base">tially unchanged.ang500s, when an ake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incl</p>
                                        </div>
                                    </div>
                               <p className="text-gray-700 text-base px-10 pt-3 font-sans">
                              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </p> </p>
                           </div>
                           <div className="px-6 pt-4 pb-2">
                               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Same UserName</span>
                               <div className="inline-flex"> <a onClick={() => router.push("../blog")} className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-400 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 no-underline" href="">Go Back </a></div>
                               <div className="inline text-left mr-0 px-5 flex justify-end">
                                    <button><FontAwesomeIcon className="text-2xl text-slate-400 hover:text-slate-700 px-5" icon={faThumbsUp} /> <FontAwesomeIcon className="text-2xl text-slate-400 hover:text-slate-700" icon={faThumbsDown} /></button>
                               </div>

                               <div className="flex justify-center py-3 grid grid-cols-3">
                                    <div className="mb-3 col-span-3">
                                        <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none resize-y" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                    </div>
                                </div>
                                <div className="inline-flex px-2 flex justify-center pb-2 px-5"> <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-400 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 no-underline" href="">Add Comment</a></div>


                                {/* comments */}

                                <div className="px-2 pb-2 px-5 pt-5"> <h5 className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" >Comments</h5></div>

                                <div className="py-3">
                                <div className="bg-slate-100 rounded-md p-2">
                                    <p className="p-3"> publishing software like Aldus PageMaker including versions of Lorem Ipsum. d</p>
                                </div>
                                </div>
                                <div className="py-3">
                                <div className="bg-slate-100 rounded-md p-2">
                                    <p className="p-3"> publishing software like Aldus PageMaker including versions of Lorem Ipsum. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a</p>
                                </div>
                                </div>
                                <div className="py-3">
                                <div className="bg-slate-100 rounded-md p-2">
                                    <p className="p-3"> publishing software like Aldus PageMaker including versions of Lorem Ipsum. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a</p>
                                </div>
                                </div>

                           </div>
                       </div>
                   </div>
        
        </>
    )
}
export default BlogDetail;

