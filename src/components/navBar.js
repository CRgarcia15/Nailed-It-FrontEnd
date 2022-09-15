import React from "react";
import { Link } from 'react-router-dom'

function nav_Bar() {
  return (
    <header className="font-roboto w-screen h-28 bg-zinc-300 px-10">
      <nav className="w-screen h-1/8 grid grid-cols-12 text-lg text-center pt-10 border-b-2 border-amber-700">
        <div className="flex-none w-full h-full text-zinc-600 text-center font-bold">
          <Link to="/create" className='hover:text-amber-700'>
            <button className="text-amber-700">01.</button> Create
          </Link>
        </div>
        <div className="flex-none w-full Sh-full text-zinc-600 text-center font-bold">
          <Link to="/explore" className='hover:text-amber-700'>
            <button className="text-amber-700">02.</button> Explore
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default nav_Bar;