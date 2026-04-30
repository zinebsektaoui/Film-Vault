export default function TopOne({ movie }) {
  return (
    <section className="topone">
      <div className="topone-left">
        <span className="badge">
          🏆 MEILLEUR FILM
        </span>

        <h1>{movie.title}</h1>
        <p className="infos">
          {movie.genre} | {movie.year}
        </p>

        <p className="description">
          {movie.description}
        </p>
        
        <button>Plus de détail</button>
      </div>
      <div className="topone-right">
        <img src={movie.image} alt={movie.title} />
      </div>
    </section>
  );
}