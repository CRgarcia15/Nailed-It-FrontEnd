import React from "react";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function GridView () {
    const [ project, setProject ] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8080/projects")
            .then((res) => res.json())
            .then((project) => setProject(project))
    }, [])

    function expandedView (index) {
        navigate(`project/${index}`)
    }
           
    return(
        <div>
            <div key={project.id} onClick={expandedView} className="w-full h-full space-y-10">
                {project.map((project, index) => {
                    return <div className="w-1/4 h-1/4" key={index}>
                        <ul>
                            <li className="text-4xl">Name: {project.name}</li>
                            <li>Category: {project.category}</li>
                            <li>Cost: ${project.cost}</li>
                            <li>Time: {project.time} hour(s)</li>
                        </ul>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GridView;