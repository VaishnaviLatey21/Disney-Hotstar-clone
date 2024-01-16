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
        ele.scrollLeft += screenWidth-110
    }

    const leftSlider = (ele) => {
        ele.scrollLeft -= screenWidth-110
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white cursor-pointer text-[40px] absolute mx-3 mt-[200px] '
                        onClick={() => leftSlider(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white cursor-pointer text-[40px] absolute mx-3 mt-[200px] right-0'
                        onClick={() => rightSlider(elementRef.current)}/>
    
    <div className='text-white flex overflow-x-auto px-16 scrollbar-hide scroll-smooth'
        ref={elementRef}>
        {
            list.map((item, index) => (
                // <div key={item.id}>
                < img src={Image_Url + item.backdrop_path} key={index}
                className='min-w-full md:h-[450px] object-cover object-left-top mr-4 hover:border-[3px] border-gray-300 transition-all duration-75 ease-in-out ' />
                // </div>
            ))
        }
    </div>
    </div>
  )
}

export default Slider