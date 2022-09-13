import React from "react";
/*
Need to import the API then use .map to display the content.
Limit to 9 projects per page.
*/ 
function GridView () {
    const projects = () => {
        fetch("http://localhost:8080/projects/1")
        .then((res) => res.json())
        .then((json) => console.log(json))
    }

    return(
        <div>
           <h1>working on it!</h1>
        </div>
    )
}

export default GridView;