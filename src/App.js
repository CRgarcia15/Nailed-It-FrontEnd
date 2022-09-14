import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";
import Nav from "./components/navBar"
import Title from "./components/titleCard"
import Form from "./components/createProject"
import Project from "./components/singleProject"
import Err from "./components/404"
import Grid from "./components/projectGridView"

function App() {
  return (
    <Router>
      <div id="content" className="bg-zinc-300 w-screen h-screen">
        <Nav />
        <main className="h-full w-4/5 px-20 container mx-auto bg-zinc-300">
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/create" element={<Form />} />
            <Route path="/explore" element={<Grid />} />
            <Route path="*" element={<Err />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
          
        </main>
      </div>
    </Router>
  )
}

export default App;
