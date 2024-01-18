import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';

function Row({title, fetchUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);
    const image_base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movies.map(movie => ( (isLargeRow && movie.poster_path || !isLargeRow && movie.poster_path) && (
                <img key={movie.id} className ={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${image_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt='Row Info' />)
            ))}
        </div>
    </div>
  )
}

export default Row;
