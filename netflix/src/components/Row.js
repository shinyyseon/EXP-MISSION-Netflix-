import React, {useEffect, useState} from 'react'
import axios from "../api/axios";
import './Row.css'
import MovieModal from "./MovieModal";

export default function Row({isLargeRow, title, id, fetchUrl}) {
    const [movies, setMovie] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        const fetchMovieData = async () => {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
        }

        fetchMovieData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return (
        <section className="row">
            <h2>{title}</h2>
            <div className="slider">
                <div className="slider_arrow_left"
                     onClick={() =>{
                         document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                     }}>
                    <span className="arrow"
                          onClick={() =>{
                        document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                    }}>
                        {"<"}
                    </span>
                </div>
                <div id={id} className="row_posters">
                    {movies &&movies.map(movie => (
                        <img
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`https://image.tmdb.org/t/p/original/${
                                movie.poster_path ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>
                <div className="slider_arrow_right"
                     onClick={() =>{
                    document.getElementById(id).scrollLeft += window.innerWidth - 80;
                }}>
                    <span className="arrow"
                        onClick={() =>{
                            document.getElementById(id).scrollLeft += window.innerWidth - 80;
                        }}>
                        {">"}
                    </span>
                </div>
            </div>
                { modalOpen && (
                     <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
                )}
        </section>
    )
}