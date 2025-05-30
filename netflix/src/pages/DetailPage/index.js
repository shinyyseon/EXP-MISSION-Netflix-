import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "../../api/axios";
import "./DetailCss.css"

export default function DetailPage() {
    let { movieId } = useParams();
    const [movie, setMovie] = useState([{}]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(`/movie/${movieId}`);
                setMovie(request.data);
            } catch (error) {
                if(error.response.status === 404) {
                    try {
                        const tvRequest = await axios.get(`/tv/${movieId}`);
                        setMovie(tvRequest.data);
                    } catch (tvError) {
                        console.error("TV도 찾을 수 없음:", tvError);
                    }
                } else {
                    console.error("영화도 찾을 수 없음:", error);
                }
            }
        }
        fetchData();
    }, [movieId]);

    if(!movie) return <div>...loading</div>

    return (
        <section className="detail_page">
            <img
                className="modal_poster_img"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="poster"
            />
            <div className="detail_text_overlay">
                <h2 className="modal_title">{movie.title || movie.name}</h2>
                <p className="modal_overview">평점: {movie.vote_average}</p>
                <p className="modal_overview">{movie.overview}</p>
            </div>
        </section>
    )
}