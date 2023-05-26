import { useState } from 'react';
import logo from './logo.svg';
import './Home.css';
import { useFetchMovie } from './useFetchMovies';

function Home() {
  var [movieName, SetMovieName] = useState('');

  function Name(event) {
    SetMovieName(event.target.value);
  }

  const movies = useFetchMovie();

  return (
    <div>
      <input value={movieName} onChange={Name}></input>
      <div>
        <br />
        <table className="users-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Language</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.original_language}</td>
                <td>{movie.vote_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
