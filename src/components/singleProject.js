import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function SingleProject() {
    const [ project, setProject ] = useState({});
    let { id } = useParams();
    
    useEffect(() => {
        const singleProjectAPI = `http://localhost:8080/projects/${id}`
        fetch(singleProjectAPI)
            .then((res) => res.json())
            .then((project) => setProject(project));
    }, [id]);

    return (
        <section className="w-full h-4/5 mx-auto flex flex-row flex-wrap rounded-2xl bg-zinc-200 drop-shadow-2xl">
            <div className="w-1/2 h-full">
                <div className="h-1/2 w-full rounded-2xl">
                    <img className="p-5 rounded-3xl" src="http://placekitten.com/600/400"/>
                </div>
                <div className="w-11/12 border-t-4 border-amber-700 ml-4 mt-2"></div>
                <div>
                    <h3 className="text-zinc-600 font-bold text-2xl pl-4 pt-6">Details:</h3>
                    <p className="text-zinc-600 text-lg pl-4 pt-3 pr-4 font-semibold">{project.details}</p>
                </div>
                <div>
                    <form action={`/projects/${project.id}?_method=DELETE`} method="POST">
                        <button className="w-1/6 text-red-700 ring-2 ring-red-700 rounded p-2 mt-64  px-4 ml-4 transition ease-in-out delay-100 hover:bg-red-300/50 duration-300" type="submit" value="DELETE">DELETE</button>
                    </form>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <div className="h-1/5 w-full">
                    <h2 className="text-zinc-600 font-bold text-4xl text-amber-700 text-center pt-16">{project.name}</h2>
            </div>
            <div className="w-10/12 border-t-4 border-amber-700 ml-14 mt-2 pb-4"></div>
            <div className="h-1/5 w-full">
                <h3 className="text-zinc-600 font-bold text-2xl pl-16">Time:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.time} hours</li>
                </ul>
            </div>
            <div className="h-1/5 w-full">
                <h3 className="w-1/3 text-zinc-600 font-bold text-2xl pl-16">Category:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.category}</li>
                </ul>
            </div>
            <div className="h-1/5 w-full">
                <h3 className="text-zinc-600 font-bold text-2xl pl-16">Materials:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.materials}</li>
                </ul>
            </div>
            <div className="h-1/5 w-full">
                <h3 className="text-zinc-600 font-bold text-2xl pl-16">Cost:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.cost}</li>
                </ul>
            </div>
                </div>
        </section>
    )
}

export default SingleProject