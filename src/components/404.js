import React from "react";
//img doesn't want to load properly, look for another one.
//need to add styling
function Err () {
    return   (
        <div className="bg-zinc-300 w-screen h-screen">

            <h1 className='font-roboto text-9xl text-zinc-600 pb-2 flex shrink font-bold'>Oops!!</h1>

            <img src="./Tim-Allen-wrench.webp" alt=" "/> 

            <div className="flex flex-col w-4/5 h-1/3 mx-auto mt-40 mr-40">
            <h1 className='font-roboto text-zinc-500 text-2xl flex shrink mt-5 ml-40 font-bold'>Here, have a hammer and start over! A good project is rarely succesful on the first try.</h1>
            <p className='font-roboto text-zinc-500 text-2xl flex shrink mt-5 ml-40'>Is ok, you we can help you find your mojo back.</p>
            </div>

            <a href="explore">Explore More</a>
        </div>
    )
}

export default Err;