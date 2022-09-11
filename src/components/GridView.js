import {React, useState,useEffect} from "react";

function GridView () {
    const [ project, setProject ] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/projects/1")
            .then((res) => res.json())
            .then((project) => setProject(project));
    }, []);
    
    const viewStyle = {
        'display': 'grid'
    }
    
    const view = () => {
        return (
            <div style={viewStyle}>
                <h3>{project.item.name}</h3>
                <img src="http://placekitten.com/200/300"/>
                <h4>Category: {project.item.category}</h4>
                <h4>time: {project.item.time}</h4>
                <h4>Cost: ${project.item.cost}</h4>
            </div>
        )
    }
    
    return(
        <div>
            { view }
        </div>
    )
}

export default GridView;