import React from "react";
import { useState, useEffect } from "react"

function GridView () {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        fetch("https://nailed-it-server.herokuapp.com/projects")
            .then((res) => res.json())
            .then((projects) => setProjects(projects));
    }, []);

    console.log(projects)

    return(
        <div>
            <div className="w-full h-full space-y-10">
                {projects.map((project, index) => {
                    return <div className="w-1/4 h-1/4" key={index}>
                        <ul>
                            <li className="text-4xl">{project.name}</li>
                            <li>{project.category}</li>
                            <li>{project.cost}</li>
                        </ul>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GridView;