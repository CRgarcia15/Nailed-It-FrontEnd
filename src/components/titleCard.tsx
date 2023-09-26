import React from "react";

function title() {
  return (
    <section className='flex flex-col w-4/5 h-1/3 mx-auto mt-40 mr-40'>
      <div className="flex shrink">
        <h1 className='font-roboto font-semibold text-amber-700 text-2xl flex shrink mb-8 ml-1'>Welcome to</h1>
      </div>
      <div className="flex shrink">
        <h2 className='font-roboto text-9xl text-zinc-600 pb-2 flex shrink font-bold transition ease-in-out delay-100 hover:scale-110'>Nailed it!</h2>
      </div>
      <div className="flex shrink">
        <h3 className='font-roboto text-zinc-500 text-6xl flex shrink mt-5 ml-40'>The DIY Website</h3>
      </div>
      <div className='w-3/4'>
        <p className='font-roboto text-zinc-500 text-xl mt-8 ml-60'>with the goal of connecting people passionate about doing it yourself, and providing them with the information they need to be successful in whatever project they choose to take on!</p>
      </div>
      <div className="w-3/4 border-b-4 border-amber-700 rounded-3xl ml-36 mt-7"></div>
    </section>
  );
}

export default title;