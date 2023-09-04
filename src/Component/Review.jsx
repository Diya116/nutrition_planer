import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {BsFillArrowRightCircleFill } from 'react-icons/bs'
function Review() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const data=[
        {
            id:1,
            img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Kito diet",
            description:"xyz",
    
        },
        {
            id:1,
            img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Kito diet",
            description:"xyz",
    
        },
        {
            id:1,
            img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Kito diet",
            description:"xyz",
    
        },
        {
            id:1,
            img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Kito diet",
            description:"xyz",
    
        },
        {
            id:1,
            img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Kito diet",
            description:"xyz",
    
        },
        {
            id:1,
            img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Kito diet",
            description:"xyz",
    
        }
    ]
  return (
       <div  className='bg-[#EAFAB0]'>
          <h3 className='px-10 pt-10 bg-[#EAFAB0]  text-4xl bold ' >What our customer say about us?</h3>
                 
          <Carousel responsive={responsive}>
            {
                data.map((item)=>(
                  <section className="relative isolate overflow-hidden  bg-[#EAFAB0]  ">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                  <div className="mx-auto max-w-2xl lg:max-w-4xl">
                   
                    <figure className="mt-10">
                      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                      </blockquote>
                      <figcaption className="mt-10">
                        <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                          <div className="font-semibold text-gray-900">Judith Black</div>
                          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          <div className="text-gray-600">CEO of Workcation</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>

                ))
            }
</Carousel>;
        </div>
  )
}

export default Review
