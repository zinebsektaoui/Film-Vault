export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">▶</span>
        <h1>
          FILM<span>VAULT</span>
        </h1>
      </div>

      {/* Actions */}
      <div className="header-actions">
        {/* Filter */}
        <select className="genre-select">
          <option value="">Genre</option>
          <option value="Action">Action</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Animation">Animation</option>
          <option value="Crime">Crime</option>
        </select>

        {/* Button */}
        <button className="add-btn">+ Ajouter un film</button>
      </div>
    </header>
  );
}
