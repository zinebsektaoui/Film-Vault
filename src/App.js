import './App.css';
import Header from "./Components/Header"
import movies from "./data/data"
import TopOne from './Components/TopOne';
import TopThree from './Components/TopThree'
import AllMovies from './Components/AllMovies';

function App() {
  const topOneMovie = movies.sort((a, b) => b.rating - a.rating)[0];
  const topThreeMovies = movies.sort((a,b) => b.rating - a.rating).slice(1, 4)
  // const movies = movies.map
  return (
    <div className="App">
      <Header />
      <TopOne movie={topOneMovie}/>
      <TopThree movies={topThreeMovies}/>
      <AllMovies/>
    </div>
  );
}

export default App;
