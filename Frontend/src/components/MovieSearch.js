import React, { useState, useEffect } from 'react';
import axios from 'axios';

import searchIcon from '../search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://movie-search-o7wp.onrender.com/v1/movies/search/';

const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const searchMovies = (title) => {
        axios.get(`${API_URL}${title}`)
            .then(response => {
                setMovies(response.data.data || []);
            })
            .catch(error => {
                console.error('Error: ', error);
                setMovies([]);
            });
    }

    useEffect(() => {
        searchMovies('Superman');
    }, []);

    return (
        <div className="app">
            <h1>Movie Premiers</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default MovieSearch;
