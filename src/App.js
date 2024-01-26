import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WatchList from './Components/WatchList';
import Movies from './Components/Movies';
import Sports from './Components/Sports';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Main from './Components/Main';


function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
       
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path='/' element={<Main />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
        {/* <Slider /> */}

      </div>
    </Router>
  );
}

export default App;
