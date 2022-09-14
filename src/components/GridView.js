import React from "react";
import {useState, useEffect} from 'react';

function GridView () {
    const [ project, setProject ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/projects")
            .then((res) => res.json())
            .then((project) => setProject(project))
    }, [])
           
    return(
        <div>
            <div 
             className="w-full h-full space-y-10">
                {project.map((project, index) => {
                    return <div className="w-1/4 h-1/4" key={index}>
                        <ul>
                            <li className="text-4xl">Name: {project.name}</li>
                            <li>Category: {project.category}</li>
                            <li>Cost: ${project.cost}</li>
                            <li>Time: {project.time} hour(s)</li>
                        </ul>
                        <button key={project.id} onClick={() => console.log(index)}>{project.name}</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GridView;