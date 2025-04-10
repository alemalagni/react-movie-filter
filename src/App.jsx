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
  const [filter, setFilter] = useState('');

  const handlerSubmit = event => {
    event.preventDefault();
  }

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
    </div>
  );
}

export default App
