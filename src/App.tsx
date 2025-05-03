import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.scss"

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<{id: number, year: number, title: string, summary: string, medium_cover_image: string, genres: []}[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      setMovies(movies);
    }

      setIsLoading(false);
      getMovies();
  }, []) ;

  return (
    <section className='container'>
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div> 
    ) : (
      <div className='movies'>
        {movies.map(item => (
          <Movie 
            key={item.id}
            id={item.id} 
            year={item.year} 
            title={item.title} 
            summary={item.summary} 
            poster={item.medium_cover_image} 
            genres={item.genres}
          />
        ))}
      </div>
     )}
    </section>
  );
}

export default App;
