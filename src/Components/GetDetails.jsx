import moviesData from "../data/data";
export default function GetDetails({ movie, onClose, onDelete }) {
  const handleDelete = () => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer "${movie.title}" ?`)) {
      onDelete(movie.id);
      alert(`Le film "${movie.title}" a été supprimé.`);
      onClose();
    }
  }
   return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        
        <div className="popup-left">
          <img src={movie.image} alt={movie.title} />
        </div>

        <div className="popup-right">
          <h1>{movie.title.toUpperCase()}</h1>

          <div className="tags">
            <span className="year">{movie.year}</span>
            <span className="genre">{movie.genre}</span>
            <span className="rating">⭐ {movie.rating}/5</span>
          </div>

          <hr />

          <h3>Description</h3>
          <p>{movie.description}</p>

          <h3>Réalisateur</h3>
          <p>{movie.director}</p>

          <h3>Acteurs principaux</h3>
          <p>{movie.actors.join(", ")}</p>

          <div className="actions">
            <button className="delete" onClick={handleDelete}>Supprimer</button>
            <button className="close" onClick={onClose}>Fermer</button>
          </div>
        </div>

      </div>
    </div>
  );
}