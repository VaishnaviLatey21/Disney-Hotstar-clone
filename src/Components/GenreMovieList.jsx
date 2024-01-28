import React, { useEffect, useState, useRef } from 'react';
import Api from '../Services/Api';
import GenreList from "../GenreList";
import MovieList from './MovieList';


function GenreMovieList() {

    return (
        <div>

            {GenreList.genres.map((item, index) => index <= 4 && (
                <div className='pt-8 ' key={index}>
                    <h2 className='text-[25px] text-white font-semibold'>{item.name}</h2>          
                        <MovieList genreId={item.id} />
                </div>
            ))}
        </div>
    );
}

export default GenreMovieList;
