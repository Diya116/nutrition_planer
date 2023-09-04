import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {BsFillArrowRightCircleFill } from 'react-icons/bs'
const Slidebar = ({data}) => {
   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items:2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
        
        return (
            <div>
               
               <Carousel responsive={responsive}>
            {
                data.map((item)=>(
                    <div class="max-w-sm overflow-hidden shadow-lg border  rounded-2xl mt-4 w-64 h-80">
  <img className=" object-cover w-64 h-52 " src={item.img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.title}</div>
    <BsFillArrowRightCircleFill size={30} />
  </div>
  
</div>

                ))
            }
</Carousel>;
            </div>
          
              
        );
    
}

export default Slidebar

