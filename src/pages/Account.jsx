import React from 'react'
import SavedShows from '../components/SavedShows'

export const Account = () => {
  return (
    <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/8e577ab2-f28f-4dd7-b73d-3f4ff83d5ba6/PL-pl-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
            <SavedShows/>
    </div>
  )
}
