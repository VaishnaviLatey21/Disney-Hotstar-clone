import React, { useEffect, useState, useRef } from 'react';
import Api from '../Services/Api';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';


function MovieList({ genreId }) {
    const [genreList, setGenreList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMoviesByGenreId();
    }, [genreId]);

    const getMoviesByGenreId = async () => {
        try {
            const response = await Api.getMovieByGenreId(genreId);
            console.log("genre id movie list: ", response.data.results);
            setGenreList(response.data.results);
        } catch (error) {
            console.error(`Error fetching movies for genre ${genreId}:`, error);
        }
    };

    const slideRight = (element) => {
        // element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        // element.scrollLeft -= 500;
    }

    return (
        <div className='relative'>
            <IoChevronBackOutline
                onClick={() => slideLeft(elementRef.current)}
                className="text-[50px] text-white p-2 z-10 cursor-pointer mt-[130px] hidden md:block absolute"
            />
            <IoChevronForwardOutline
                onClick={() => slideRight(elementRef.current)}
                className="text-[50px] text-white p-2 cursor-pointer z-10 top-0 mt-[130px] hidden md:block absolute right-0"
            />

            <div className='flex overflow-x-auto gap-8 scrollbar-hide mt-4 scroll-smooth pt-4 px-3 pb-4'>
                {
                    genreList.map((item, index) => (
                        <img
                            key={index}
                            className="rounded-lg hover:border-[3px] border-gray-400 cursor-pointer
            hover:scale-110 transition-all duration-150 ease-in "
                            src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                            alt={item.title}
                        />
                    )
                    )}
            </div>

        </div>
    );
}

export default MovieList;
