import React from 'react';
import logo from "../Images/logo-d-plus.svg"
import { Link, useNavigate } from 'react-router-dom';
import { HiHome, HiSearch, HiOutlinePlusSm, HiOutlineLogout } from "react-icons/hi";
import { HiOutlineFilm, HiMiniUserCircle, HiMiniEllipsisVertical, HiBan } from "react-icons/hi2";
import { GiBlackball } from "react-icons/gi";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


function Navbar() {

    const navigate = useNavigate();

    const logOut = async () => {
        try {
            await signOut(auth)
            alert("sign out successfully")
            console.log("sign out successfully!!");
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className='grid grid-cols-2 bg-opacity-90 '>
        <div className='bg-black bg-opacity-70 fixed w-[65px] h-screen'>
          <Link to='/'>
            <img
              src={logo}
              className='w-[80px] md:w-[100px] object-cover ml-6 mt-6 cursor-pointer'
              alt='Logo'
            />
          </Link>
          <div className='text-white cursor-pointer font-semibold mt-16 ml-11 flex flex-col gap-8 '>
            <Link to='/signup' className='group flex items-center gap-3'>
              <HiMiniUserCircle className='text-[30px] hover:text-[15px]' />
              <h1 className='hidden group-hover:block text-[20px]'>Profile</h1>
            </Link>
            <Link to='/search' className='group flex items-center gap-3'>
              <HiSearch className='text-[30px] hover:text-[15px]' />
              <h1 className='hidden group-hover:block text-[20px]'>Search</h1>
            </Link>
            <Link to='/' className='group flex items-center gap-3'>
              <HiHome className='text-[30px] hover:text-[15px]' />
              <h1 className='hidden group-hover:block text-[20px]'>Home</h1>
            </Link>
            <Link to='/movies' className='group flex items-center gap-3'>
              <HiOutlineFilm className='text-[30px] hover:text-[15px]' />
              <h1 className='hidden group-hover:block text-[20px]'>Movies</h1>
            </Link>
            <Link to='/tv' className='group flex items-center gap-3'>
              <GiBlackball className='text-[30px] hover:text-[15px]' />
              <h1 className='hidden group-hover:block text-[20px]'>TV</h1>
            </Link>
            {auth.currentUser && (
              <Link to='' onClick={logOut} className='group flex items-center gap-3'>
                <HiOutlineLogout className='text-[30px] hover:text-[15px]' />
                <h1 className='hidden group-hover:block text-[20px]'>Signout</h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
}

export default Navbar