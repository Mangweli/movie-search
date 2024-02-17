import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MovieSearch from '../components/MovieSearch';

jest.mock('axios');

describe('MovieSearch Component', () => {
  it('fetches data from API and updates state with movies', async () => {
    // Mock response data for when movies are found
    const responseData = {
      data: {
        data: [
            {
              Title: 'Superman',
              Year: '1978',
              imdbID: 'tt0078346',
              Type: 'movie',
              Poster: 'N/A',
            },
          ],
        }
      };

    // Mock axios response for successful API call
    axios.get.mockResolvedValueOnce(responseData);

    // Render the MovieSearch component
    render(<MovieSearch />);

    // Find the input field by placeholder text
    const inputField = screen.getByPlaceholderText('Search for movies');

    // Simulate a change event on the input field to trigger searchMovies
    fireEvent.change(inputField, { target: { value: 'Superman' } });

    // Assert that the component handles successful API response correctly
    expect(await screen.findByText('Superman')).toBeInTheDocument();
    expect(screen.getByText('1978')).toBeInTheDocument();

  });
});
