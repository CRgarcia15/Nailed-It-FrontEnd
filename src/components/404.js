import React from "react";
import image from "../images/Tim-Allen-hammer.png"

function Err () {
    const imageErr = image
    return (
        <div className="bg-zinc-300 w-screen h-screen">
            <h1 className='font-roboto text-9xl text-zinc-600 pb-2 flex shrink font-bold '>Oops!! 404 Not Found.</h1>
                
            <div className="mt-5">
                <img src={imageErr} alt=" " className="ml-10"/> 
            </div>
            
            <div className="flex flex-col w-4/5 h-1/3 mx-auto mt-40 mr-40 mt-10">
                <h1 className='font-roboto text-zinc-500 text-2xl flex shrink mt-5 font-bold'>It'll buff out! A good project is rarely succesful on the first try.</h1>
                <p className='font-roboto text-zinc-500 text-2xl flex shrink mt-5 '>Is ok, you we can help you find your mojo back.</p>
                <a href="/" className=" w-1/5 text-amber-700 text-center mt-5 bg-zinc-300 hover:bg-amber-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Explore More</a>
           </div>
        </div>
    )
}

export default Err;