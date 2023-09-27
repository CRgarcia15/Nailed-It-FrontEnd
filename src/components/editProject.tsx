import React from 'react';
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'

interface Project {
  _id: number,
  name: string,
  details: string,
  steps: string,
  time: number,
  category: string,
  materials: string,
  cost: number
}

function EditForm() {
    const [ project, setProject ] = useState({});
    const { id } = useParams();
    const singleProjectAPI = `https://nailed-it-server.herokuapp.com/projects/${id}`
    const [ name, setName ] = useState('')
    const [ details, setDetails ] = useState('')
    const [ time, setTime ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ materials, setMaterials ] = useState('')
    const [ cost, setCost ] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch(singleProjectAPI)
            .then((res) => res.json())
            .then((project) => setProject(project))
    }, []);
    console.log(project)

    const handleSubmit = (e: any) => {
      const updatedProject = { name, details, time, category, materials, cost }
      fetch(singleProjectAPI, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProject)
      }).then(() => {
        console.log('Project Updated')
      })
      navigate('/explore')
      }; 

    return (
        <section className="w-3/5 h-11/12 bg-zinc-200 px-3 py-6 rounded-2xl drop-shadow-2xl mx-auto">
            <h2 className="text-zinc-600 font-bold text-4xl text-amber-700 text-center pb-6">Edit this Project</h2>
        <form className="grid grid-rows-8 text-zinc-600 font-bold space-y-2" onSubmit={handleSubmit}>
          <label className="ml-52 text-lg" htmlFor="projectName">Project Name</label>
          <input
            className="w-1/2 text-sm font-semibold border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
            defaultValue={project.name}
          />
          <label className="ml-52 text-lg" htmlFor="projectDetails">Project Details</label>
          <textarea
            className="w-1/2 text-sm font-semibold border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            name="details"
            rows={5}
            cols={20}
            onChange={(e) => setDetails(e.target.value)}
            defaultValue={project.details}
          />
          <br />
          <label className="ml-52 text-lg" htmlFor="projectCost">Time (hours)</label>
          <input
            className="w-1/2 text-sm font-semibold border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="number"
            name="time"
            onChange={(e) => setTime(e.target.value)}
            defaultValue={project.time}
          />
          <label className="ml-52 text-lg" htmlFor="category">Category</label>
          <select 
          className="w-1/2 text-sm font-semibold border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600" 
          name="category"
          defaultValue={project.category} 
          onChange={(e) => setCategory(e.target.value)}>

            <option selected value={project.category}>{project.category}</option>
            <option value="Metal Work">Metal Work</option>
            <option value="Wood Work">Wood Work</option>
            <option value="Crafts">Crafts</option>
            <option value="Pottery">Pottery</option>
            <option value="Sewing">Sewing</option>
            <option value="Other">Other</option>
          </select>
          <label className="ml-52 text-lg" htmlFor="projectMaterials">Project Materials</label>
          <input
            className="w-1/2 text-sm font-semibold border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="text"
            name="materials"
            defaultValue={project.materials}
            onChange={(e) => setMaterials(e.target.value)}
          />
          <label className="ml-52 text-lg" htmlFor="projectCost">Project Cost</label>
          <input
            className="w-1/2 text-sm font-semibold border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="number"
            name="cost"
            defaultValue={project.cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <button className="w-1/6 text-amber-700 ring-2 ring-amber-700 rounded p-2 px-4 mx-auto transition ease-in-out delay-100 hover:bg-amber-300/50 duration-300" type="submit">EDIT</button>
        </form>
        <div>
          <Link to={`/project/${project._id}`} className="transition ease-in-out delay-100">
          <button className="text-zinc-700 font-semibold ring-2 ring-zinc-700 rounded p-2 ml-2 px-4 transition ease-in-out delay-100 hover:bg-zinc-400/50 duration-300">
            Back
          </button>
          </Link>
          </div>
        </section>
    )
}

export default EditForm