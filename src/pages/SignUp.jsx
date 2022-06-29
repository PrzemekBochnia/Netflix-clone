import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


export const SignUp = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const{user, signUp} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit =async (e) =>{
        e.preventDefault()
        try{
            await signUp(email,password)
            navigate("/")
        }catch(error){
            console.log(error);
        }
    }

  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/8e577ab2-f28f-4dd7-b73d-3f4ff83d5ba6/PL-pl-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email'/>
                        <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password"placeholder='password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-gray-600'>
                            <p><input className='mr-2' type="checkbox"/>Remember Me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>Already subscribe to Netflix?</span><Link to= '/login'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
