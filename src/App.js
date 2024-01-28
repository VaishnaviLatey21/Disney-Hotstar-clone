// App.js
import React from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
import Movies from './Components/Movies';
import Tv from './Components/Tv';
import SignUp from './Components/SignUp';
import Slider from './Components/Slider';
import Search from './Components/Search';

function App() {

  return (
    
    <Router>
      <div className='flex h-screen w-full'>
        <div className='w-1/12'>
          <Navbar />
        </div>
        <div className='w-11/12 overflow-y-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<Tv />} />
            <Route path='/search' element={<Search />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
