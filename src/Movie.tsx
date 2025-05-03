import { FC } from "react";
import "./Movie.scss"

interface MovieProps {
    id: number;
    year: number;
    title: string;
    summary: string;
    poster: string;
    genres: [];
}

const Movie: FC<MovieProps> = ({id, year, title, summary, poster, genres}) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_column">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => (
                        <li className="genres_genre" key={index}>{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    );
};

export default Movie;