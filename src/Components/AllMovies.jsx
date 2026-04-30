import movies from "../data/data";

export default function AllMovies() {
  return (
    <section className="all-movies">
      <h2 className="all-movies-title">TOUS LES FILMS</h2>

      <div className="all-movies-container">
        {movies.map((movie) => (
          <div className="movieCard" key={movie.title}>
            <img className="movie-image" src={movie.image} alt={movie.title} />

            <div className="movieContent">
              <h3 className="movie-title">{movie.title}</h3>

              <div className="movie-rating">
                <span className="star">★</span>
                <span>{movie.rating}/5</span>
              </div>

              <p className="movie-year">{movie.year}</p>
              <p className="movie-genre">{movie.genre}</p>

              <button className="movie-options">⋮</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}