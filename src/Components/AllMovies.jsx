import movies from "../data/data";
import { useState } from "react";
import GetDetails from "./GetDetails";

export default function AllMovies({ movies, onDelete }) {
  const [selectedMovie, setSelectedMovie] = useState(null);// tp stock the selected moviee

  const [menuOpen, setMenuOpen] = useState(null); // Stocke l'ID du film dont le menu est ouvert
   const handleMenuToggle = (movieId, e) => {
    e.stopPropagation(); // Empêche la propagation du clic
    setMenuOpen(menuOpen === movieId ? null : movieId);
  };
  const handleClickOutside = () => {
    setMenuOpen(null);
  };

  const [selectedGenre, setSelectedGenre] = useState("");// stock du genre selectn pour filtrage
  const filtredMovies = selectedGenre ? movies.filter(m => m.genre.includes(selectedGenre)) : movies;
  return (
    <section className="all-movies" onClick={handleClickOutside}>
      <div className="top-up">
        <h2 className="all-movies-title">TOUS LES FILMS</h2>
        <select className="genre-select" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All movies</option>
          <option value="Action">Action</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Animation">Animation</option>
          <option value="Crime">Crime</option>
        </select>
      </div>
      <div className="all-movies-container">
        {filtredMovies.map((movie) => (
          <div className="movieCard" key={movie.id}>
            <img className="movie-image" src={movie.image} alt={movie.title} />

            <div className="movieContent">
              <h3 className="movie-title">{movie.title}</h3>

              <div className="movie-rating">
                <span className="star">★</span>
                <span>{movie.rating}/5</span>
              </div>

              <p className="movie-year">{movie.year}</p>
              <p className="movie-genre">{movie.genre}</p>

              <div className="movie-options-container">
                <button className="movie-options" onClick={(e) => handleMenuToggle(movie.id, e)}>⋮</button>
                {/* Mini Card Menu */}
                {menuOpen === movie.id && (
                  <div className="options-menu">
                    <button className="menu-item details" onClick={() => setSelectedMovie(movie)}>
                      <span>ℹ️</span> Détails
                    </button>
                    <button className="menu-item delete" onClick={() => onDelete(movie.id)}>
                      <span>🗑️</span> Supprimer
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie &&
        <GetDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} onDelete={onDelete} />
      }
    </section>
  );
}