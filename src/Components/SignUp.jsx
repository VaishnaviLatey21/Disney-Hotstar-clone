import React, { useState } from 'react'
import signin from "../Images/signin.jpg";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import userlogo from "../Images/user.png";


function SignUp() {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState([]);
  const [otp, setOtp] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const getOtp = async () => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {})
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
      setUser(confirmation);
      console.log("confirmation object:", confirmation);
      console.log("otp sent successfully");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  }

  const verifyOtp = async () => {
    try {
      if (user && user.confirm) {
        const data = await user.confirm(otp);
        console.log("otp verified", data);
        // navigate("/");
        setIsSignUp(true)
      } else {
        console.error("Invalid user object for verification");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  }

  return (
    <div className='grid grid-cols-2 h-screen bg-black'>
      <div style={{ backgroundImage: `linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${signin})` }} >

      </div>
      <div className='flex flex-col items-center'>
        <HiOutlineXMark className='color-white text-white absolute text-[30px] top-10 right-10 cursor-pointer' onClick={() => navigate("/")} />

        <h1 className='text-white text-center font-bold text-[30px] mt-6'>
          {isSignUp ? "Profiles" : "Login or SignUp"}
          {/* Login or Signup */}
        </h1>

        <div className="flex flex-col items-center mt-8">
          {
            isSignUp ? (
              <>
                <h2 className='text-white text-[25px]'>Welcome, User!</h2>
                <img src={userlogo} className='h-[100px] mt-7' />
                <p className='text-white mt-3'>Name</p>
              </>
            ) : (
              <>
                <PhoneInput
                  country={'in'}
                  value={phone}
                  onChange={phone => setPhone("+" + phone)}
                  inputStyle={{ backgroundColor: "black", color: "white", paddingBlock: "22px" }}
                  placeholder='Enter mobile number'
                />

                {phone && <button onClick={getOtp} className="mt-7 h-11 bg-blue-600 w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get OTP
                </button>}
                <div id='recaptcha' className='mt-2'>

                </div>
                {phone && <input onChange={(e) => setOtp(e.target.value)} type="text" className="bg-black border border-white mt-10 text-white text-sm rounded-lg block w-72 p-3 dark:bg-black dark:border-white dark:placeholder-gray-400 dark:text-white" placeholder="Enter OTP" required />
                }
                {otp && <button onClick={verifyOtp} className="mt-10  bg-blue-700 w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Continue
                </button>}
              </>
            )
          }

        </div>
      </div>

    </div>
  )
}

export default SignUp