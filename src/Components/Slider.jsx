import React, { useEffect, useRef, useState } from 'react'
import Api from "../Services/Api";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';


const Image_Url = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider({ currentPage }) {
    const [list, setList] = useState([]);
    const elementRef = useRef();
    const location = useLocation();


    useEffect(() => {
        if (location.pathname === '/tv') {
            getTvShowsVideos();
        } else if (location.pathname === '/movies') {
            getAllMovies();
        } else {
            getTrendingMoviesVideos();
        }
    },  [location.pathname]);

    const getTrendingMoviesVideos = () => {
        Api.getTrendingMovies.then(res => {
            console.log(res.data.results);
            setList(res.data.results);
        })
            .catch(err => {
                console.log(err);
            });
    }

    const getTvShowsVideos = () => {
        Api.getTvShows
            .then(res => {
                console.log(res.data.results);
                setList(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getAllMovies = () => {
        Api.getMovies
            .then(res => {
                console.log(res.data.results);
                setList(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const slideRight = (element) => {
        element.scrollLeft += 1400;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 1400;
    }


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
                                <button className='bg-gray-500 w-80 h-12 hover:bg-gray-400 text-white font-bold mt-6 rounded py-2'>
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider