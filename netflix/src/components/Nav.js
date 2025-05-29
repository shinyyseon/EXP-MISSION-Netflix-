import React, {useState, useEffect, useRef} from 'react'
import './Nav.css'
import {useNavigate} from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";

export default function Nav() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
       window.addEventListener("scroll", () => {
           if(window.scrollY > 50) {
               setShow(true);
           } else {
               setShow(false);
           }
       })
        return () => {
           window.removeEventListener("scroll", () => {});
        }
    }, []);

    useOnClickOutside(searchRef, () => setShowSearch(false))

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

    return (
        <nav className={`nav ${show && 'nav_black'}`}>
            <div className="main_header">
                <div className="nav_menu">
                    <img
                        alt="Netflix logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                        className="nav_logo"
                        onClick={() => window.location.assign(window.location.origin)}
                    />
                    <ul>
                        <li><a href={"/"}>홈</a></li>
                        <li><a href={"/"}>시리즈</a></li>
                        <li><a href={"/"}>영화</a></li>
                        <li><a href={"/"}>NEW! 요즘 대세 콘텐츠</a></li>
                        <li><a href={"/"}>내가 찜한 리스트</a></li>
                        <li><a href={"/"}>언어별로 찾아보기</a></li>
                    </ul>
                </div>
                <div className="header_right">
                    {!showSearch && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                             height="24" data-icon="MagnifyingGlassStandard" aria-hidden="true" className="search-icon"
                             onClick={() => setShowSearch(!showSearch)} >
                            <path fill="currentColor" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                    )}

                    {showSearch && (
                        <div className="search_wrapper" ref={searchRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                                 height="24" data-icon="MagnifyingGlassStandard" aria-hidden="true" className="search_inner_icon">
                                <path fill="currentColor" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                            <input
                                value={searchValue}
                                onChange={handleChange}
                                type="text"
                                className={`search_input ${showSearch ? 'show' : ''}`} ref={searchRef}
                                placeholder="제목, 사람, 장르"
                                autoFocus
                            />
                        </div>
                    )}

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="BellStandard" aria-hidden="true">
                        <path fill="currentColor" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>

                    <img
                        alt="User logged"
                        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                        className="nav_avatar"
                    />
                </div>
            </div>
        </nav>
    )
}
