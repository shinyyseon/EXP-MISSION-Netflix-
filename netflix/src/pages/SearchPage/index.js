import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import './SearchPage.css'
import useDebounce from "../../hooks/useDebounce";

export default function SearchPage() {
    const  navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
            setSearchResults(request.data.results);
        } catch (error) {
            console.error('검색 실패:', error);
        }
    }

    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className="search_container">
                {searchResults.map((movie) => {
                    if(movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
                        return (
                            <div key={movie.id} className="movie">
                                <div onClick={() => navigate(`/${movie.id}`)} className="movie_column_poster">
                                    <img src={movieImageUrl} alt="" className="movie_poster" />
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </section>
        ) : (
            <section className="no_results">
                <div className="no_results_text">
                    <p>
                        Your search for "{debouncedSearchTerm}" did not have any matches.
                    </p>
                    <p>Suggestions:</p>
                    <ul>
                        <li>Try different keywords</li>
                    </ul>
                </div>
            </section>
        )
    }

    return renderSearchResults();
}