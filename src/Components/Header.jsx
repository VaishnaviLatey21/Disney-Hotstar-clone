import React, { useState } from 'react';
import logo from "../Images/logo-d-plus.svg";
import { HiHome, HiSearch, HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineFilm, HiOutlineGlobeAlt, HiMiniUserCircle, HiMiniEllipsisVertical } from "react-icons/hi2";
import { useNavigate, Link } from 'react-router-dom';

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate();

    const menu = [
        {
            id: 1,
            name: "Home",
            icon: <HiHome />,
            path: "/"
        },
        {
            id: 2,
            name: "Search",
            icon: <HiSearch />,
            path: "/search"
        },
        {
            id: 3,
            name: "WatchList",
            icon: <HiOutlinePlusSm />,
            path: "/watchlist"
        },
        {
            id: 4,
            name: "Movies",
            icon: <HiOutlineFilm />,
            path: "/movies"
        },
        {
            id: 5,
            name: "Sports",
            icon: <HiOutlineGlobeAlt />,
            path: "/sports"
        }
    ]

    const handleClick = () => {
        navigate("/signup");
    }

    return (
        <div className='flex items-center gap-8 p-5 justify-between cursor-pointer '>
            <img src={logo} className='w-[80px] md:w-[100px] object-cover ' onClick={() => navigate("/")} />

            <div className='text-white hidden md:flex items-center gap-8'>
                {menu.map((item) => (
                    <Link key={item.id} to={item.path} className='flex items-center gap-2 text-[20px] font-semibold hover:underline underline-offset-8'>
                        <p>{item.icon}</p>
                        <h2>{item.name}</h2>
                    </Link>
                ))}
            </div>

            <div className='text-white flex items-center md:hidden gap-8'>
                {menu.slice(0, 3).map((item) => (
                    <Link key={item.id} to={item.path} className='flex items-center gap-2 text-[20px] font-semibold hover:underline underline-offset-8'>
                        <p>{item.icon}</p>
                        <h2>{item.name}</h2>
                    </Link>
                ))}
                <div className='md:hidden cursor-pointer text-[25px] pt-1' onClick={() => setShowMenu(!showMenu)}>
                    <HiMiniEllipsisVertical />
                    {showMenu ? <div className='absolute mt-3 bg-gray-950 border-[1px] border-gray-700 p-3 py-4 '>
                        {menu.slice(3).map((item) => (
                            <Link key={item.id} to={item.path} className='flex items-center gap-2 text-[20px] font-semibold hover:underline underline-offset-8'>
                                <p>{item.icon}</p>
                                <h2>{item.name}</h2>
                            </Link>
                        ))}
                    </div> : null}
                </div>
            </div>

            <HiMiniUserCircle className='text-white text-[45px] mr-3 cursor-pointer' onClick={handleClick}/>
        </div>
    );
}

export default Header;
