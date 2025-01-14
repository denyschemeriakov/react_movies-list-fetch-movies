import React from 'react';
import './FindMovie.scss';

import { MovieCard } from '../MovieCard';
import movies from '../../api/movies.json';

export const FindMovie: React.FC = () => (
  <>
    <form className="find-movie">
      <div className="field">
        <label className="label" htmlFor="movie-title">
          Movie title
        </label>

        <div className="control">
          <input
            type="text"
            id="movie-title"
            placeholder="Enter a title to search"
            className="input is-danger"
          />
        </div>

        <p className="help is-danger">
          Can&apos;t find a movie with such a title
        </p>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="button"
            className="button is-light"
          >
            Find a movie
          </button>
        </div>

        <div className="control">
          <button
            type="button"
            className="button is-primary"
          >
            Add to the list
          </button>
        </div>
      </div>
    </form>

    <div className="container">
      <h2 className="title">Preview</h2>
      <MovieCard {...movies[0]} />
    </div>
  </>
);
