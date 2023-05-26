import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetchMovie() {
  var [movies, SetMovies] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        SetMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return movies;
}
