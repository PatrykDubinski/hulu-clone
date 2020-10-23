import React, { useState, useEffect } from 'react'
import './Results.css';

import VideoCard from './VideoCard';
import axios from 'axios';
import FlipMove from 'react-flip-move';

const Results = ({ selectedOption }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const url = `https://api.themoviedb.org/3${selectedOption}`;
            const devOptions = {
                dataType: 'jsonp',
                jsonpCallback: 'test'
            }
            const response = await axios.get(url, devOptions)
            setMovies(response.data.results);
            return response;
        }
        
        fetchData();
    }, [selectedOption]);

    return (
        <div className='results'>
            <FlipMove>
                {movies.map(movie => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results
