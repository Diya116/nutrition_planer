import React,{useState,useRef,useEffect} from 'react'
import logo from "../../assets/logo.webp"
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const[toggle,setToggle]=useState(false);
    const handleClick=()=>{
        setToggle(!toggle);
    }
  return (  
<div className='w-full h-[80px] bg-white border-b  '>
      <div className='md:max-w-[1480px] max-w-[600px]m-auto border w-full h-full flex justify-between items-center p-2' >
       <img src={logo} alt='logo' className='h-[50px]'/>
       <div className='flex items-center'>
     <ul className=' gap-6 text-[#003441] hidden md:flex'>
         <li>Home</li>
         <li>Services</li>
         <li>About us</li>
         <li>Blog</li>
         <li>Contact</li>
     </ul>
      </div>
      <div>
        <button className='hidden md:flex px-8 py-3 rounded-md bg-[#003441] text-white font-bold'>Join us</button>
      </div>
      <div className='md:hidden ' onClick={handleClick}>
        { toggle ? <AiOutlineClose/> :<GiHamburgerMenu/>
   }
            
      </div>
      </div>
      
      <div className={` bg-white ease-in-out duration-300 ${toggle?"translate-x-0":"translate-x-full"} md:hidden`}>
        <ul className={`ease-in-out duration-500 ${toggle?"translate-x-0":"translate-x-full"} `}>
           <li className='p-4  text-[#003441] text-xl bold '>Home</li>
           <li className='p-4 text-[#003441] text-xl bold'>Service</li>
           <li className='p-4 text-[#003441] text-xl bold'>About us</li>
           <li className='p-4 text-[#003441] text-xl bold'>Blog</li>
           <li className='p-4 text-[#003441] text-xl bold'>Contact us</li>
           
           <button className=' m-2 md:flex px-8 py-3 rounded-md bg-[#003441] text-white font-bold'>Join us</button>
           
       
        </ul>
       
      </div>
</div>
  )
}

export default Navbar


