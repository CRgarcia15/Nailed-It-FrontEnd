import React from "react";
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

function GridView () {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/projects")
            .then((res) => res.json())
            .then((projects) => setProjects(projects));
    }, []);

    return(
        <div>
            <div className="w-full h-full grid grid-cols-3 space-x-10 mt-20">
                {projects.map((project, index) => {
                    return <div className="w-1/4 h-1/4" key={index}>
                        <Link to={`/project/${project._id}`} >
                        <ul>
                            <li className="text-4xl">{project.name}</li>
                            <li>{project.category}</li>
                            <li>{project.cost}</li>
                        </ul>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GridView;