import React from "react";
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function GridView () {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        const gridProjectAPI = `http://localhost:8080/projects`
        fetch(gridProjectAPI)
            .then((res) => res.json())
            .then((projects) => setProjects(projects));
    }, []);

    return(
        <div>
            <div className="w-full h-full grid grid-cols-3 space-x-10 mt-20 ">
                {projects.map((project, index) => {
                    return <div className="w-50 h-50 hover:shadow-xl hover:bg-zinc-400 hover:transition mx-1.5 bg-zinc-300 rounded-md px-5 py-2 text-zinc-500 text-center text-xl" key={index}>
                        <Link to={`/project/${project._id}`} >
                        <ul>
                            <li className="text-6xl font-semibold text-zinc-700">{project.name}</li>
                            <li><strong>Category:</strong> {project.category}</li>
                            <li><strong>Cost:</strong> ${project.cost}</li>
                            <li><strong>Time:</strong> {project.time} hour(s)</li>
                        </ul>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GridView;