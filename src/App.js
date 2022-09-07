import './App.css';
import Nav from "./components/navBar"
import Title from "./components/titleCard"

function App() {
  return (
    <div id="content" className="bg-zinc-300 w-screen h-screen">
      <Nav />
      <main className="h-full w-4/5 px-20 container mx-auto bg-zinc-300">
        <Title />
      </main>
    </div>
  )
}

export default App;
