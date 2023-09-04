import React from 'react'
import Img from '../assets/hero.jpg'
function Hero() {
  return (
    <div className='w-full h-full  flex flex-col justify-center items-center py-6 md:py-20'>
        <div className=" max-w-[600px] md:max-w-[1480px] m-auto flex flex-col justify-between  md:flex-row-reverse  px-4  ">
        {/* <div className=' p-2 max-w-[1480px] m-auto flex flex-col md:grid md:grid-cols-2 '> */}
        <img src={Img} className=' md:w-80'/> 
         <section className='flex flex-col justify-center '>
    <p className='text-blue-900  bold text-4xl 
    '>Welcome to fitness bell india</p>
   <h3 className='text-[#003441] bold mt-4 md:text-6xl  md:leading-[72px] py-2   '>Good <span className='text-teal-600 font-popins'>FITNESS</span> Need
   <span className='w-24 h-24 bg-[#EAFAB0] rounded-full text-[#003441] text-4'> *</span> <br/> Good <span className='text-teal-600'>NUTRITION</span>  </h3>
   <p className='"text-gray-700 text-s  md:text-2xl mt-4'>Your wellness journey is as unique as you are. That's why at Fitnessbell, we craft personalized diet and fitness plans that align with your individual goals and preferences. Because one size never fits all</p>
   <button className='bg-[#003441] w-36 hover:bg-teal-600 text-white font-semibold mt-4 py-2 px-2 rounded-xl md:py-4 md:px-3'> Start Chat</button>
</section>
 <div className= 'm-2 w-24 h-24 bg-[#EAFAB0] rounded-full flex justify-center items-center'>
   <span className='text-8xl text-green-950'>*</span>
 </div>
         
            
    </div> 
    <div className='w-24 h-24 bg-[#EAFAB0]  rounded-full  justify-center items-center md:flex hidden text-black'>
          explore more
      </div>      
      
    </div>
  )
}

export default Hero
