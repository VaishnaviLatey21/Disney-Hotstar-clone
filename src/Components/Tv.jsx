import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from './Slider';


function Tv() {
  const [tv, setTv] = useState([]);
  const api_key = "4927eaa78308464ff5455b8cc9f9bf61";

  useEffect(() => {
    const getTvList = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`);
        setTv(res.data.results);
        console.log("tv shows list", res.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTvList();
  }, []);


  return (
    <>
      <Slider />
      <h1 className='text-[25px] mt-5 ml-3'>Latest Releases </h1>
      <div className='grid grid-cols-5 mt-3'>
        {tv.map((item) => (
          <div key={item.id} className="max-w-sm p-1 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Tv