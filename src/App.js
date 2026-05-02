import './App.css';
import Header from "./Components/Header"
import moviesData from "./data/data"
import TopOne from './Components/TopOne';
import TopThree from './Components/TopThree'
import AllMovies from './Components/AllMovies';
import { useState, useEffect } from 'react';

function App() {
  // Charger les films depuis localStorage ou utiliser les données initiales
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : moviesData;
  });

  // ⚠️ Crée une copie avant de trier pour ne pas modifier l'original
  const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
  const topOneMovie = sortedMovies[0];
  const topThreeMovies = sortedMovies.slice(1, 4);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const deleteMovie = (id) => {
    const updatedMovies = movies.filter(m => m.id !== id);
    setMovies(updatedMovies);
  }
  return (
    <div className="App">
      <Header setMovies={setMovies} />  {/* ← passe setMovies à Header */}
      <TopOne movie={topOneMovie} />
      <TopThree movies={topThreeMovies} onDelete={deleteMovie} />
      <AllMovies movies={movies} onDelete={deleteMovie}/>
    </div>
  );
}

export default App;