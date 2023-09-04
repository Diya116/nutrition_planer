import React from 'react'
import Nutrition from '../assets/fruit.png'
import Fitness from '../assets/fitness.png'
import Mentore from '../assets/mentoring.png'
function Services() {
  return (
    <div className='md:py-10 px-4 flex flex-col items-center'>
       <h3 className='text-6xl bold text-[#003441] '>How we can help you?</h3>
       <div className='flex flex-wrap gap-6 mt-10'>
          <div  className='w-60 h-64 bg-[#FFE598] rounded-xl flex flex-col justify-center items-center'>
            <img src={Nutrition
            } className='w-24 h-24'/>
            <p className='text-[#003441] bold mt-3 text-lg'>Customise Nutrition plane</p>
            
          </div>
          <div  className='w-60 h-64 bg-[#EAFAB0] rounded-xl flex flex-col justify-center items-center'>
            <img src={Fitness
            } className='w-24 h-24'/>
            <p className='text-[#003441] bold mt-3 text-lg'>Customise Fitness plane</p>
            
          </div>
          <div  className='w-60 h-64 bg-[#FFE598] rounded-xl flex flex-col justify-center items-center'>
            <img src={Mentore
            } className='w-24 h-24'/>
            <p className='text-[#003441] bold mt-3 text-lg'>Personal Mentore</p>
            
          </div>
       </div>
       

    </div>
  )
}

export default Services
