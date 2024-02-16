const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src = {movie.Poster} alt = {`${movie.Title} Poster`} />
        </div>
    );
}

export default Movie