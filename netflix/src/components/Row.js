import React, {useEffect, useState} from 'react'
import axios from "../api/axios";
import './Row.css'
import MovieModal from "./MovieModal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import  { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
            <div className="row-header">
                <h2>{title}</h2>
                <div className={`swiper-custom-pagination pagination-${id}`}></div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                navigation
                pagination={{ clickable: true, el: `.pagination-${id}`}}
                scrollbar={{ draggable: true }}
                className="custom-swiper"
                breakpoints={{
                    1378: {
                        slidesPerView: 7,
                        slidePerGroup: 7,
                    },
                    998: {
                        slidesPerView: 6,
                        slidePerGroup: 6,
                    },
                    625: {
                        slidesPerView: 5,
                        slidePerGroup: 5,
                    },
                    0: {
                        slidesPerView: 4,
                        slidePerGroup: 4,
                    },
                }}
            >
                <div id={id} className="row_posters">
                    {movies && movies.map((movie, index) => {
                        const isFirst = index === 0;
                        const isLast = index === movies.length - 1;

                        const positionClass = isFirst ? "first-slide" : isLast ? "last-slide" : "";

                        return (
                            <SwiperSlide key={movie.id} className={positionClass}>
                                <img
                                    className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
                                    src={`https://image.tmdb.org/t/p/original/${
                                        movie.poster_path ? movie.poster_path : movie.backdrop_path
                                    }`}
                                    alt={movie.name}
                                    onClick={() => handleClick(movie)}
                                />
                            </SwiperSlide>
                        );
                    })}

                </div>
            </Swiper>

                { modalOpen && (
                     <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
                )}
        </section>
    )
}