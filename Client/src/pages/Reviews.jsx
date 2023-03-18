import React from 'react'
import '../index.css';
import Navbar from "../components/Navbar.jsx"

function Reviews() {
  return (
    <section className='bg-red-700 w-11/12 mx-auto'>
    <div className=' w-9/12 mx-auto flex flex-col justify-center items-center gap-4'>
        <div className='w-5/12 text-center'><h1 style={{fontSize:30}}>Reviews</h1></div>
        <div>These quotes represent a few of the many positive reviews that we have received for therapists who work with BetterHelp. We don't pay anyone to provide their review and they are all made voluntarily. Some people's experience receiving therapy with BetterHelp might be different. If you would like to review your therapist, please send your review to</div>
    </div>
    
    </section>
  )
}

export default Reviews