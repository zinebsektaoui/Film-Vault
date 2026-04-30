import { useState } from "react";

export default function AddForm({ setMovies, onClose }) {  // ← assure-toi que onClose est là
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
    genre: "",
    director: "",
    actors: "",
    image: "",
    rating: 1,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const newMovie = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      year: parseInt(formData.year),
      genre: formData.genre,
      director: formData.director,
      actors: formData.actors.split(", ").filter(actor => actor.trim() !== ""),
      image: formData.image,
      rating: parseFloat(formData.rating),
    };
    
    setMovies(prev => [...prev, newMovie]);
    onClose();  // ← ferme la modale
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>  {/* ← ferme la modale */}
          ✖
        </button>

        <h2>🎬 Ajouter un film</h2>

        <form className="movie-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            placeholder="Titre du film" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />

          <textarea 
            name="description" 
            placeholder="Description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
          />

          <input 
            type="number" 
            name="year" 
            placeholder="Année de sortie" 
            value={formData.year} 
            onChange={handleChange} 
            required 
          />

          <input 
            type="text" 
            name="genre" 
            placeholder="Genre" 
            value={formData.genre} 
            onChange={handleChange} 
            required 
          />

          <input 
            type="text" 
            name="director" 
            placeholder="Réalisateur" 
            value={formData.director} 
            onChange={handleChange} 
            required 
          />

          <input 
            type="text" 
            name="actors" 
            placeholder="Acteurs principaux (séparés par des virgules)" 
            value={formData.actors} 
            onChange={handleChange} 
            required 
          />

          <input 
            type="url" 
            name="image" 
            placeholder="URL de l'image" 
            value={formData.image} 
            onChange={handleChange} 
            required 
          />

          <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐⭐</option>
            <option value="3">3 ⭐⭐⭐</option>
            <option value="4">4 ⭐⭐⭐⭐</option>
            <option value="5">5 ⭐⭐⭐⭐⭐</option>
          </select>

          <button type="submit" className="submit-btn">
            Ajouter le film
          </button>
        </form>
      </div>
    </div>
  );
}