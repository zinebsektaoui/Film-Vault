import { useState } from "react";
import AddForm from "./AddForm";

export default function Header() {
  const [add, setAdd] = useState(false)
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">▶</span>
        <h1>
          FILM<span>VAULT</span>
        </h1>
      </div>

      <div className="header-actions">
        <select className="genre-select">
          <option value="">Genre</option>
          <option value="Action">Action</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Animation">Animation</option>
          <option value="Crime">Crime</option>
        </select>

        <button className="add-btn" onClick={(() => setAdd(true))}>+ Ajouter un film</button>
      </div>
      {add && (
        <AddForm/>
      )}
    </header>
  );
}
