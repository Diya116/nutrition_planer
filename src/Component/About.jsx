import React from 'react'
import Founder from '../assets/founder.png'
function About() {
  return (
    <div className='w-full mt-4 px-10 flex flex-col items-center justify-center md:rounded-full border border-blue-950 border-b-0 bg-[#EAFAB0] '>
       <h3 className=' md:text-6xl text-4xl bold text-[#003441]'>About Us</h3>
       <div className='block  md:flex '>
       <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident vel hic a impedit ipsa ipsum, itaque cum at consectetur veniam quod assumenda facilis deleniti excepturi animi veritatis soluta doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident vel hic a impedit ipsa ipsum, itaque cum at consectetur veniam quod assumenda facilis deleniti excepturi animi veritatis soluta doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident vel hic a impedit ipsa ipsum, itaque cum at consectetur veniam quod assumenda facilis deleniti excepturi animi veritatis soluta doloribus.</p>
       <img src={Founder} className='w-60'/>

       </div>
     
    </div>
  )
}

export default About
