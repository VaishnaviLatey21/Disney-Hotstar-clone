import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Search() {

    const [allShows, setAllShows] = useState([]);
    const [search, setSearch] = useState("");
    const api_key = "4927eaa78308464ff5455b8cc9f9bf61";

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
          try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`);
            setAllShows(res.data.results);
            console.log(res.data.results);
          } catch (error) {
            console.error("Error fetching top-rated movies:", error);
          }
        };
    
        fetchTopRatedMovies();
      }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (search.trim() !== "") {
              const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${search}`);
              setAllShows(res.data.results);
              console.log(res.data.results);
            } else {
              const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`);
              setAllShows(res.data.results);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [search]);

    return (
        <>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search shows..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-4 bg-gray-800 text-white border rounded-sm w-full mt-6 ml-3"
                />
            </div>
            <div className='grid grid-cols-5 mt-6'>
                {allShows.map((item) => (
                    <div key={item.id} className="max-w-sm p-1 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Search