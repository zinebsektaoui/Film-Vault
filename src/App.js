import './App.css';
import Header from "./Components/Header"
import moviesData from "./data/data"
import TopOne from './Components/TopOne';
import TopThree from './Components/TopThree'
import AllMovies from './Components/AllMovies';
import AddForm from './Components/AddForm';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const topOneMovie = movies.sort((a, b) => b.rating - a.rating)[0];
  const topThreeMovies = movies.sort((a,b) => b.rating - a.rating).slice(1, 4)
  return (
    <div className="App">
      <Header />
      <TopOne movie={topOneMovie}/>
      <TopThree movies={topThreeMovies}/>
      <AllMovies/>
      <AddForm setMovies={setMovies}/>
    </div>
  );
}

export default App;
