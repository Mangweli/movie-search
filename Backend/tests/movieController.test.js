import MovieController from '../controllers/movie.controller.js';

// Mocking axios for testing
jest.mock('axios');

describe('MovieController', () => {
    let movieController;

    beforeEach(() => {
        movieController = new MovieController();
        // Mocking the movie service method
        movieController.movieService.searchMovies = jest.fn(); // Mocking the searchMovies method
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('searchMovie should send success response with data', async () => {
        const req = { params: { movietitle: 'Superman' } };
        const res = {
            status: jest.fn(() => res),
            json: jest.fn()
        };
        const next = jest.fn();

        // Mocking the response from the service
        const responseData = {
            data: {
                Search: [
                    {
                        Title: 'Super 8',
                        Year: '2011',
                        imdbID: 'tt1650062',
                        Type: 'movie',
                        Poster: 'https://m.media-amazon.com/images/M/MV5BMjIzNjEyMzcwOF5BMl5BanBnXkFtZTcwMTkyMjE0NQ@@._V1_SX300.jpg'
                    },
                    {
                        Title: 'The Super Mario Bros. Movie',
                        Year: '2023',
                        imdbID: 'tt6718170',
                        Type: 'movie',
                        Poster: 'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg'
                    }
                ]
            }
        };

        // Mocking the movie service method
        movieController.movieService.searchMovies.mockResolvedValueOnce(responseData);

        await movieController.searchMovie(req, res, next);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            status: true,
            message: {},
            data: responseData.data.Search
        });
        expect(next).not.toHaveBeenCalled();
    });
});
