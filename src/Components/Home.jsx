import React, { useEffect, useState, useRef } from 'react';
import Slider from './Slider';
import axios from "axios";
import GenreMovieList from "./GenreMovieList";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function Home() {
  const [movies, setMovies] = useState([]);
  const api_key = "4927eaa78308464ff5455b8cc9f9bf61";
  const elementRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`);
        setMovies(res.data.results);
        // console.log(res.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  }
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  }



  return (
    <div className='text-white'>
      <Slider />
      <h1 className='text-[25px] mt-7 ml-3 font-semibold'>Latest Releases </h1>

      <div className='relative'>
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className="text-[50px] text-white p-2 z-10 cursor-pointer mt-[130px] hidden md:block absolute"
        />
        <IoChevronForwardOutline
          onClick={() => slideRight(elementRef.current)}
          className="text-[50px] text-white p-2 cursor-pointer z-10 top-0 mt-[130px] hidden md:block absolute right-0"
        />

        <div className='flex overflow-x-auto gap-8 scrollbar-hide mt-4 scroll-smooth pt-4 px-3 pb-4' ref={elementRef}>
          {movies.map((item) => (
            <img
              className="rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"
              key={item.id}
              src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
              alt={item.title}
            />
          ))}
        </div>
      </div>

      <GenreMovieList />
    </div>

  );
}

export default Home;
