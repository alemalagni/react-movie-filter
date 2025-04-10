import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'

const movie = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
  const [showMovie, setShowMovie] = useState(movie);
  const [filter, setFilter] = useState('');
  const [filterTitle, setFilterTitle] = useState('');

  const handlerSubmit = event => {
    event.preventDefault();
  }

  useEffect(() => {
    if (filter === "" && filterTitle === "") {
      setShowMovie(movie);
    } else if (filterTitle === "") {
      setShowMovie(movie.filter(f =>
        f.genre.includes(filter)
      ))
    } else if (filter === "") {
      setShowMovie(movie.filter(f =>
        f.title.includes(filterTitle)
      ))
    } else {
      setShowMovie(movie.filter(f =>
        f.genre.includes(filter)
      ))
      setShowMovie(showMovie.filter(f =>
        f.title.includes(filterTitle)
      ))
    }
  }, [filter, filterTitle])

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={filterTitle}
          onChange={e => setFilterTitle(e.target.value)}
        />
      </form>
      <form onSubmit={handlerSubmit}>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">Tutti i film</option>
          <option value="Azione">Azione</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
        </select>
      </form>

      <div>
        {showMovie.map((item) => (
          <div
            key={item.title}
          >
            <h3>{item.title}</h3>
            <p>{item.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
