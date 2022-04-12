import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import { Content } from "rsuite";



export default function BlogForm(){
    const [Btitle, setTitle] = useState('');
    const [Bcontent, setContent] = useState('');
    const [Bimage, setImage] = useState('')
    const router = useRouter();
    // const Store = (e) => {

    //     alert("Blog title is: " + Btitle)
    //     e.preventDefault();
    //     // props.submitForm();
    // }
    
        const submitForm = async () => {
            const response = await fetch('api/blog', {
                method: 'POST',
                body: JSON.stringify({
                    Btitle,Bcontent
                }),
                headers:{
                    'Content-Type' : 'application/json'
                }
            })
            const data2 = await response.json()
            console.log(data2)   
            console.log(Btitle)
            
            
    }

    return (
        <>
        <div className="font-sans w-full h-full bg-no-repeat bg-cover pt-20">
            <div className="mb-4 justify-center justify-items-center py-20 grid">
                <div>
                    <form onSubmit={function() {submitForm(); router.push("../blog")}} className="bg-white bg-opacity-70 shadow-md hover:shadow-xl rounded px-8 pt-6 pb-8 mb-4 hover:bg-white hover:opacity-100" action="">
                        <div className='text-center mb-10 text-sm '>
                            <h2>Submit your blog</h2> 
                        </div>
                        {/* Title */}
                        <div className="my-2 mb-4 ">
                        <label  className=" text-gray-700 text-lg font-bold mb-2" htmlFor="title" >Blog Title:</label>
                        <input className=" text-lg mx-2 border-0 border-b-2 border-gray-300 focus:outline-none hover:border-gray-400 focus:border-gray-500" required="true"  value={Btitle} onChange={e => setTitle(e.target.value)} name='title' type="text" placeholder='Title'/>
                        </div>
                        {/* Journey Details */}
                        <div className="my-1 mb-4 text-md">
                        <label  className=" text-gray-700 font-bold mb-2"  >Journey From:</label>
                        <input required="true" className="mx-2 border-0 border-b-2 border-gray-300 focus:outline-none hover:border-gray-400 focus:border-gray-500" type="text" placeholder='Type here..'/>

                        <label  className=" text-gray-700 text-sm font-bold mb-2" >To:</label>
                        <input required="true" className="mx-2 border-0 border-b-2 border-gray-300 focus:outline-none hover:border-gray-400 focus:border-gray-500" name='title' type="text" placeholder='Type destination..'/>
                        </div>
                        {/* Service used */}
                        <div className="my-2 mb-4">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title" >Which Service did you use: </label>
                        <select className="justify-center ml-2">
                            <option> Bus </option>
                            <option> Car </option>
                            <option> Bike </option>
                        </select>
                        </div>
                        {/* Attractions */}
                        <div className="my-2 mb-4">
                        <label  className=" text-gray-700 text-sm font-bold mb-2" >Attractions: </label>
                        <input className="mx-2 border-0 border-b-2 border-gray-300 focus:outline-none hover:border-gray-400 focus:border-gray-500" required="true" name='title' type="text" placeholder='Best places to visit.. '/>
                        </div>

                       
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='review'>Blog</label>
                            <textarea
                                required="true"
                                value={Bcontent}
                                onChange={e => setContent(e.target.value)}
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                placeholder="Review"
                            >
                            </textarea>
                        <div className='mb-4'>
                            <label htmlFor="formFileMultiple" className="form-label inline-block mb-2 text-gray-700" >Add images</label>
                            <input value={Bimage} onChange={e => setContent(e.target.value)} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple></input>
                        </div>
                        <div className=" justify-center flex w-20 transition-all ease-in duration-75 m-2 p-2 rounded-lg bg-lime-300 hover:bg-green-600 font-bold hover:text-white border-2 border-lime-400 hover:shadow-xl  text-black shadow-md">
                        <button type="submit"  >Submit</button>
                        </div>
                            
                    </form>
        
                </div>
        
            </div>
        </div>
        </>
    )
}