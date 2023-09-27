import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"

interface ProjectItem {
    _id: number,
    name: string,
    details: string,
    steps: string,
    time: number,
    category: string,
    materials: string,
    cost: number
}

function SingleProject() {
    const [ project, setProject ] = useState<ProjectItem>({});
    const { id } = useParams();
    const singleProjectAPI = `https://nailed-it-server.herokuapp.com/projects/${id}`
    const navigate = useNavigate()
    
    

    useEffect(() => {
        fetch(singleProjectAPI)
            .then((res) => res.json())
            .then((project) => setProject(project));
    }, [id]);


    const HandleDelete = (e: any) => {
      e.preventDefault();
      fetch(singleProjectAPI, {
        method: 'DELETE'
      }).then((res) => {
        res.json().then((response) => {
            console.log(response)
        })
      })
      navigate('/explore')
      }; 

    return (
        <section className="w-1/2 h-5/6 flex flex-cols mx-auto rounded-2xl bg-zinc-200 drop-shadow-2xl">
            <div className="w-full h-full">
                <div className="h-1/8 w-full">
                    <h2 className="text-zinc-600 font-bold text-4xl text-amber-700 text-center pt-2 mb-4">{project.name}</h2>
            </div>
            <div className="w-11/12 border-t-4 border-amber-700 ml-4 mt-2"></div>
            <div className="w-full h-1/8">
                    <h3 className="text-zinc-600 font-bold text-2xl pl-4">Details:</h3>
                    <p className=" w-full flex flex-wrap text-zinc-600 text-sm text-left pl-6 pt-1 pr-4 pb-10 font-semibold">{project.details}</p>
                </div>
                <div className="w-11/12 border-t-4 border-amber-700 ml-4 mt-2"></div>
            <div className="h-1/8 w-full py-4">
                <h3 className="text-zinc-600 font-bold text-2xl pl-4">Time:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.time} hours</li>
                </ul>
            </div>
            <div className="h-1/8 w-full py-4">
                <h3 className="w-1/3 text-zinc-600 font-bold text-2xl pl-4">Category:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.category}</li>
                </ul>
            </div>
            <div className="h-1/8 w-full py-4">
                <h3 className="text-zinc-600 font-bold text-2xl pl-4">Materials:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.materials}</li>
                </ul>
            </div>
            <div className="h-1/8 w-full py-4">
                <h3 className="text-zinc-600 font-bold text-2xl pl-4">Cost:</h3>
                <ul>
                    <li className="list-disc ml-72 mt-8 text-zinc-600 text-lg font-bold">{project.cost}</li>
                </ul>
            </div>
            <div className="flex pt-20">
                    <form onSubmit={HandleDelete}>
                        <button className=" text-red-700 ring-2 ring-red-700 rounded p-2  px-4 ml-4 transition ease-in-out delay-100 hover:bg-red-300/50 duration-300" type="submit" value="DELETE">DELETE</button>
                    </form>
                    <Link to={`/projects/edit/${project._id}`}>
                    <button className=" text-zinc-700 ring-2 ring-zinc-700 rounded p-2  px-6 ml-6 transition ease-in-out delay-100 hover:bg-zinc-300/50 duration-300">EDIT</button>
                    </Link>
                </div>
                </div>
        </section>
    )
}

export default SingleProject