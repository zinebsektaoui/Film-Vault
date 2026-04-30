import movies from "../data/data";

export default function TopThree({ movies }) {
  return (
    <section className="topthree">
      <h2>⭐ TOP 3 DES MEILLEURES FILMS</h2>

      <div className="topthree-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} />

            <div className="movie-content">
              <h3>{movie.title}</h3>

              <p className="genre">{movie.genre}</p>

              <div className="rating">
                ⭐ ⭐ ⭐ ⭐ ⭐<span>{movie.rating}/5</span>
              </div>

              <button>Détails</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
