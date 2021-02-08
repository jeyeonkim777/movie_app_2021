import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
// import propTypes from 'prop-types';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie__data card col-4">
            <img className="mx-2" src={ poster } alt={ title }/>
            <div className="card-body">
                <h3 className="movie__title">{ title }</h3>
                <h5 className="movie__year">{ year }</h5>
                <p className="movie__summary">{ summary }</p>
                <ul className="movie__genres">
                    { genres.map((genre, index) => {
                        return <li key={ index } className="movie__genre">{ genre }</li>
                    })}
                </ul>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}



Movie.propTypes = { 
    // id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;