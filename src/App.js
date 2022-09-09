// import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GetPopular2022Games from "./components/PopularGames2022";

function App() {
  return (
    <main id="main">
        <div>
          <Navbar />
          <Hero />
          <GetPopular2022Games />
        </div>
    </main>
  );
}

export default App;
