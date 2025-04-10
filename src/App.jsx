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
  let showMovie = movie;
  const [filter, setFilter] = useState('');

  const handlerSubmit = event => {
    event.preventDefault();
  }

  useEffect(() => {
    console.log("Filtro: " + filter)
    if (filter === "") {
      showMovie = movie;
    } else {
      showMovie = movie.filter(f =>
        f.genre.includes(filter)
      )
    }
  }, [filter])

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <button>Ricerca</button>
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
