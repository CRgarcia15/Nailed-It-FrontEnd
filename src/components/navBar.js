import React from "react";

function nav_Bar() {
  return (
    <header className="font-roboto w-screen h-28 bg-zinc-300 px-10">
      <nav className="w-screen h-1/8 grid grid-cols-12 text-lg text-center pt-10">
        <div className="flex-none w-full h-full text-zinc-600 text-center font-bold">
          <a className='hover:text-amber-700' href='#YourProjects'>
            <button className="text-amber-700">01.</button> Your Projects
          </a>
        </div>
        <div className="flex-none w-full h-full text-zinc-600 text-center font-bold">
          <a className='hover:text-amber-700' href='#Create'>
            <button className="text-amber-700">02.</button> Create
          </a>
        </div>
        <div className="flex-none w-full Sh-full text-zinc-600 text-center font-bold">
          <a className='hover:text-amber-700' href='#Explore'>
            <button className="text-amber-700">03.</button> Explore
          </a>
        </div>
      </nav>
    </header>
  );
}

export default nav_Bar;