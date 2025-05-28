import React, {useEffect, useRef, useState} from 'react'
import axios from "../../api/axios";
import './MovieModal.css'
import useOnClickOutside from "../../hooks/useOnClickOutside";

const MovieModal = ({
    id,
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen,
}) => {
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`/movie/${id}/videos`);
                const trailers = response.data.results.filter(
                    (video) => video.type === 'Trailer' && video.site === 'YouTube' && video.official === true
                );
                if (trailers.length > 0) {
                    setVideoKey(trailers[0].key);
                }
            } catch (error) {
                console.error('예고편 로딩 실패:', error);
            }
        };

        fetchVideo();
    }, [id]);

    const ref = useRef(null);
    useOnClickOutside(ref, () => {setModalOpen(false)})

    return (
        <div className="presentation" role="presentation">
            <div className="wrapper_modal">
                <div className="modal" ref={ref}>
                    <span onClick={() => setModalOpen(false)} className="modal_close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="XStandard" aria-hidden="true">
                        <path fill="currentColor" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                    </span>
                    {videoKey ? (
                        <iframe
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                            title="YouTube trailer"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <img
                            className="modal_poster_img"
                            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                            alt="modal_poster_img"
                        />
                    )}
                    <div className="modal_content">
                        <p className="modal_details">
                            <span className="modal_user_perc">
                                100% for you
                            </span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className="modal_title">{title ? title : name}</h2>
                        <p className="modal_overview">평점: {vote_average}</p>
                        <p className="modal_overview">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;