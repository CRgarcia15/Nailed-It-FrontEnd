import React from "react";
//img doesn't want to load properly, look for another one.
function Err () {
    return   (
        <div className="bg-zinc-300 w-screen h-screen">
            <h1><strong>Oops!!</strong></h1>
            <img src="./Tim-Allen-wrench.webp" alt=" "/> 
            <h1><strong>Here, have a hammer and start over! A good project is rarely succesful on the first try. </strong></h1>
            <p>Is ok, you we can help you find your mojo back.</p>
            <a href="explore">Explore More</a>
        </div>
    )
}

export default Err;