import React from 'react'

function singleProject() {
    return (
        <section className="w-full h-4/5 flex flex-row flex-wrap rounded-2xl bg-zinc-200 drop-shadow-2xl">
            <div className="w-1/2 h-full">
                <div className="h-1/2 w-full rounded-lg"></div>
                <div className="w-11/12 border-t-4 border-amber-700 ml-4 mt-2"></div>
                <div>
                    <h3 className="text-zinc-600 font-bold text-2xl pl-4 pt-6">Details:</h3>
                    <p className="text-zinc-600 text-lg pl-4 pt-3 pr-4 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor viverra nulla, euismod mattis justo imperdiet volutpat. Nullam id odio faucibus, facilisis odio a, posuere metus. Sed rhoncus sollicitudin diam, id egestas eros viverra id. Suspendisse auctor, risus ut elementum ornare, nisl elit pharetra quam, id auctor mi tortor quis ante. Nunc nec nulla sodales, aliquet metus vel, tristique ipsum. Vestibulum id nisl vel est ornare laoreet lobortis ut massa. Phasellus augue sem, convallis et enim at, tincidunt varius orci.</p>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <div className="h-1/5 w-full">
                    <h2 className="text-zinc-600 font-bold text-4xl text-amber-700 text-center pt-16">*Project Name*</h2>
            </div>
            <div className="w-10/12 border-t-4 border-amber-700 ml-14 mt-2 pb-4"></div>
            <div className="h-1/5 w-full">
                <h3 className="w-1/3 text-zinc-600 font-bold text-2xl pl-16">Category:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">Wood Work</li>
                </ul>
            </div>
            <div className="h-1/5 w-full">
                <h3 className="text-zinc-600 font-bold text-2xl pl-16">Materials:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">Wood</li>
                </ul>
            </div>
            <div className="h-1/5 w-full">
                <h3 className="text-zinc-600 font-bold text-2xl pl-16">Cost:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">20,000</li>
                </ul>
            </div>
                </div>
        </section>
    )
}

export default singleProject