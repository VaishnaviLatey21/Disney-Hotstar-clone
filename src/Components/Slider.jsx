import React, { useEffect, useRef, useState } from 'react'
import Api from "../Services/Api";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { json, useLocation } from 'react-router-dom';
import YouTube from "react-youtube";


const api_key = "4927eaa78308464ff5455b8cc9f9bf61"
const Image_Url = "https://image.tmdb.org/t/p/original";

function Slider({ currentPage }) {
    const [list, setList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [videos, setVideos] = useState([]);
    const elementRef = useRef();
    const location = useLocation();


    // useEffect(() => {
    //     if (location.pathname === '/tv') {
    //         getTvShowsVideos();
    //     } else if (location.pathname === '/movies') {
    //         getAllMovies();
    //     } else {
    //         getTrendingMoviesVideos();
    //     }
    // }, [location.pathname]);

    useEffect(() => {
        fetchData();
    }, [location.pathname]);

    const fetchData = () => {
        try {
            if (location.pathname === '/tv') {
                Api.getTvShows
                    .then(res => {
                        // console.log(res.data.results);
                        setList(res.data.results);
                    })
            } else if (location.pathname === '/movies') {
                Api.getMovies
                    .then(res => {
                        // console.log(res.data.results);
                        setList(res.data.results);
                    })
            } else {
                Api.getTrendingMovies.then(res => {
                    // console.log(res.data.results);
                    setList(res.data.results);
                })
            }
        } catch (err) {
            console.error(err);
        }
    }


    const getVideos = async (movieId) => {
        try {
            const response = await Api.getMovieVideos(movieId);
            setVideos(response.data.results);
        } catch (err) {
            console.error(err);
        }
    };

    const getTvVideos = async(tvId) => {
        try {
            const response = await Api.getTvVideos(tvId);
            setVideos(response.data.results);
        } catch (err) {
            console.error(err);
        }
    }
    // const getTrendingMoviesVideos = () => {
    //     Api.getTrendingMovies.then(res => {
    //         // console.log(res.data.results);
    //         setList(res.data.results);
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    // const getTvShowsVideos = () => {
    //     Api.getTvShows
    //         .then(res => {
    //             // console.log(res.data.results);
    //             setList(res.data.results);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    // const getAllMovies = () => {
    //     Api.getMovies
    //         .then(res => {
    //             // console.log(res.data.results);
    //             setList(res.data.results);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    const slideRight = (element) => {
        element.scrollLeft += 1400;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 1400;
    }

    const handleClickWatchNow = async (movie) => {
        if (selectedMovie !== movie) {
            setSelectedMovie(movie);
            if (location.pathname === '/tv') {
                await getTvVideos(movie.id);
            } else {
                await getVideos(movie.id);
            }
        }
    }

    const closePopup = () => {
        setSelectedMovie(null);
        setVideos([]);
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            origin: 'http://localhost:3000', // Add your application's domain here
            autoplay: 1,
        },
    };


    return (
        <div className='relative'>
            <IoChevronBackOutline
                onClick={() => slideLeft(elementRef.current)}
                className="text-[60px] text-white p-2 cursor-pointer mt-[300px] hidden md:block absolute"
            />
            <IoChevronForwardOutline
                onClick={() => slideRight(elementRef.current)}
                className="text-[60px] text-white p-2 cursor-pointer z-10 top-0 mt-[300px] hidden md:block absolute right-0"
            />

            <div className='text-white flex overflow-x-auto px-18 scrollbar-hide scroll-smooth'
                ref={elementRef}>
                {
                    list.map((item, index) => (
                        <div key={item.id} className='pb-7 h-screen grid grid-cols-2'
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${Image_Url + item.backdrop_path})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                // className: "flex flex-col justify-center text-center",
                                minHeight: "700px",
                                minWidth: "100%",
                                marginRight: "16px"
                            }}>
                            <div className='ml-20'>
                                <h1 className='text-white font-bold text-4xl pt-60'>{item.title || item.name}</h1>
                                <h1 className='mt-6 font-semibold'>{`${item.release_date} - ${item.original_language === 'en' ? 'English' : item.original_language}`}</h1>
                                <h1 className='mt-6'>{item.overview}</h1>
                                <button onClick={() => handleClickWatchNow(item)}
                                    className='bg-gray-500 w-80 h-12 hover:bg-gray-400 text-white font-bold mt-6 rounded py-2'>
                                    Watch Now
                                </button>
                                {selectedMovie && (
                                    <div className='popup-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                        <button onClick={closePopup} className='close-button'>
                                            Close
                                        </button>
                                        {videos.length > 0 && (
                                            <YouTube
                                                videoId={videos[0].key} // Assuming you want to play the first video in the list
                                                opts={opts}
                                                onReady={(e) => e.target.pauseVideo()}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Slider