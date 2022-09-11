import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from "./components/navBar"
import Title from "./components/titleCard"
import Form from "./components/createProject"
import Project from "./components/singleProject"
import { useState, useEffect } from "react"

function App() {
  return (
    <Router>
      <div id="content" className="bg-zinc-300 w-screen h-screen">
        <Nav />
        <main className="h-full w-4/5 px-20 container mx-auto bg-zinc-300">
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/create" element={<Form />} />
            <Route path="/Project/id" element={<Project />} />
          </Routes>
          
        </main>
      </div>
    </Router>
  )
}

export default App;