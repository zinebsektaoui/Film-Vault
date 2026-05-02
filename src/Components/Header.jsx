import { useState } from "react";
import AddForm from "./AddForm";

export default function Header({ setMovies }) {  
  const [add, setAdd] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">▶</span>
        <h1>
          FILM<span>VAULT</span>
        </h1>
      </div>

      <div className="header-actions">
        <button className="add-btn" onClick={() => setAdd(true)}>
          + Ajouter un film
        </button>
      </div>

      {add && <AddForm setMovies={setMovies} onClose={() => setAdd(false)} />}
    </header>
  );
}