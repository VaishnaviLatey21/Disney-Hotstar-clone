import React, { useEffect, useRef, useState } from 'react'
import Api from "../Services/Api";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";


const Image_Url = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
    const [list, setList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMoviesVideos();

    }, [])

    const getTrendingMoviesVideos = () => {
        Api.getTrendingMovies.then(res => {
            console.log(res.data.results);
            setList(res.data.results);
        })
            .catch(err => {
                console.log(err);
            });
    }

    const rightSlider = (ele) => {
        ele.scrollLeft += screenWidth - 110
    }

    const leftSlider = (ele) => {
        ele.scrollLeft -= screenWidth - 110
    }

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white cursor-pointer text-[40px] absolute mx-3 mt-[330px] '
                onClick={() => leftSlider(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white cursor-pointer text-[40px] absolute mx-3 mt-[330px] right-0'
                onClick={() => rightSlider(elementRef.current)} />

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
                            minHeight: "700px", // Adjust the height as needed
                            minWidth: "100%",   // Full width
                            marginRight: "16px" // Adjust the margin as needed
                        }}>
                            <div className='ml-20'>
                                <h1 className='text-white font-bold text-4xl pt-60'>{item.title}</h1>
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