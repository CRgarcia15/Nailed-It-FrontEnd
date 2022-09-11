import './App.css';
import Nav from "./components/navBar"
import Err from './components/404';


function App() {
  return (
    <div id="content" className="bg-zinc-300 w-screen h-screen">
      <Nav />
      <main className="h-full w-4/5 px-20 container mx-auto">
        <Err />
      </main>
    </div>
  )
}

export default App;