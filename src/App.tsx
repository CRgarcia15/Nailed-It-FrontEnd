import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from "./components/navBar"
import Title from "./components/titleCard"
import Form from "./components/createProject"
import Project from "./components/singleProject"
import Err from "./components/404"
import Grid from "./components/GridView"
import Edit from './components/editProject'

function App() {
  return (
    <Router>
      <div id="content" className="w-screen h-screen bg-zinc-300">
        <Nav />
        <main className="h-screen w-4/5 container mx-auto bg-zinc-300">
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/create" element={<Form />} />
            <Route path="/explore" element={<Grid />} />
            <Route path="*" element={<Err />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path='/projects/edit/:id' element={<Edit />} />
          </Routes>
          
        </main>
      </div>
    </Router>
  )
}

export default App;