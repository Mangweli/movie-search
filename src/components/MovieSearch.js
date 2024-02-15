import { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import Movie from './Movie';


const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const searchMovies = () => {
        axios.get(`/search?searchTerm=${searchTerm}`)
            .then(response => {
                setMovies(response.data.Search || [])
            })
            .catch(error => {
                console.error('Error: ', error);
                setMovies([]);
            })
    }

    return (
        <div>
            <h1>Movie Search</h1>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs= {8}>
                    <TextField
                        fullWidth
                        variant='outlined'
                        label = "Enter a movie Title"
                        value = {searchTerm}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        onClick={searchMovies}
                    >Search
                    </Button>
                </Grid>
            </Grid>
    
            <div>
                {
                    movies.map(movie => (
                        <Movie key={movie.imdbID} movie= {movie} />
                    ))
                }
            </div>
        </div>
    ); 
}

export default MovieSearch;
