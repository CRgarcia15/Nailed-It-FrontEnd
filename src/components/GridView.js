import React from "react";
import {useState, useEffect} from 'react';

function GridView () {
    const [ project, setProject ] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/projects/1")
            .then((res) => res.json())
            .then((project) => setProject(project))
    }, [])

    return(
        <div>
            <img src="http://placekitten.com/200/300" alt=""/>
            <h1><strong>Name:</strong> {project.name}</h1>
            <h3><strong>Category:</strong> {project.category}</h3>
            <h3><strong>Time:</strong> {project.time}</h3>
            <h3><strong>Cost:</strong> {project.cost}</h3>
         </div>
    )
}

export default GridView;