import React from 'react';
import logo from "../Images/logo-d-plus.svg"
import { Link, useNavigate } from 'react-router-dom';
import { HiHome, HiSearch, HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineFilm, HiMiniUserCircle, HiMiniEllipsisVertical, HiBan } from "react-icons/hi2";
import { GiBlackball } from "react-icons/gi";


function Navbar() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signup");
    }

    return (
        <div className='grid grid-cols-2 '>
            <div >
                <img src={logo} className='w-[80px] md:w-[100px] object-cover ml-5 mt-6 cursor-pointer ' onClick={() => navigate("/")} />
                <div className='text-white  cursor-pointer font-semibold mt-16 ml-11 flex flex-col gap-8 '>
                    <div className='group flex items-center gap-3'>
                        <HiMiniUserCircle className='text-[30px] hover:text-[15px]' onClick={handleClick}/>
                        <h1 className='hidden group-hover:block  text-[20px]'>My Space</h1>
                    </div>
                    <div className='group flex items-center gap-3'>
                        <HiSearch className='text-[30px] hover:text-[15px]' />
                        <h1 className='hidden group-hover:block text-[20px]'>Search</h1>
                    </div>
                    <div className='group flex items-center gap-3'>
                        <HiHome className='text-[30px] hover:text-[15px]' />
                        <h1 className='hidden group-hover:block  text-[20px]'>Home</h1>
                    </div>
                    <div className='group flex items-center gap-3'>
                        <HiOutlineFilm className='text-[30px] hover:text-[15px]' />
                        <h1 className='hidden group-hover:block text-[20px]'>Movies</h1>
                    </div>
                    <div className='group flex items-center gap-3'>
                        <GiBlackball className='text-[30px] hover:text-[15px]' />
                        <h1 className='hidden group-hover:block text-[20px]'>Sports</h1>
                    </div>
                    {/* <HiMiniUserCircle/>
                    <HiSearch/>
                    <HiHome/>
                    <HiOutlineFilm/>
                    <GiBlackball/> */}

                </div>
            </div>

        </div>
    )
}

export default Navbar