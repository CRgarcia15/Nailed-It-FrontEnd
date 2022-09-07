import React from "react";
import { Link } from 'react-router-dom'

function projectForm() {
    return (
        <section className="w-3/5 h-3/4 bg-zinc-200 pt-5 px-3 py-2 rounded-2xl drop-shadow-2xl mx-auto mt-6">
            <h2 className="text-zinc-600 font-bold text-4xl text-amber-700 text-center pt-3 pb-10">Add a New Project</h2>
        <form className="grid grid-rows-8 text-zinc-600 font-bold space-y-6" action="" method="">
          <label className="ml-52 text-lg" htmlFor="projectName">Project Name</label>
          <input
            className="w-1/2 border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="text"
            name="name"
            id="name"
            required
          />
          <label className="ml-52 text-lg" htmlFor="projectDetails">Project Details</label>
          <input
            className="w-1/2 border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="text"
            name="details"
            id="details"
          />
          <br />
          <label className="ml-52 text-lg" htmlFor="category">Category</label>
          <select className="w-1/2 border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600" name="category" id="category">
            <option disabled selected value="select"> -- select an option -- </option>
            <option value="metalWork">Metal Work</option>
            <option value="woodWork">Wood Work</option>
            <option value="crafts">Crafts</option>
            <option value="pottery">Pottery</option>
            <option value="sewing">Sewing</option>
            <option value="other">Other</option>
          </select>
          <label className="ml-52 text-lg" htmlFor="projectMaterials">Project Materials</label>
          <input
            className="w-1/2 border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="text"
            name="materials"
            id="materials"
          />
          <label className="ml-52 text-lg" htmlFor="projectCost">Project Cost</label>
          <input
            className="w-1/2 border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600"
            type="number"
            name="cost"
            id="cost"
          />
          <input className="w-1/5 text-amber-700 ring-2 ring-amber-700 rounded p-2 px-4 mx-auto transition ease-in-out delay-100 hover:bg-amber-200/50 duration-300" type="submit"/>
        </form>
        <div>
          <Link to="/">
          <button className="text-zinc-700 font-semibold ring-2 ring-zinc-700 rounded p-2 ml-2 px-4 transition ease-in-out delay-100 hover:bg-zinc-200/50 duration-300">
            Back
          </button>
          </Link>
          </div>
        </section>
    )
}

export default projectForm