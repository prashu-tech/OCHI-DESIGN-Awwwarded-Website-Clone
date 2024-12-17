import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.6" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='texture mt-40 px-20'>
      {["We create", "Eye Opening", "Presentations"].map((item,index)=>{
        return (
          <div className='masker'>
          <div className='w-fit flex item-centre'>
          {index === 1 && (
            <motion.div initial={{width: 0}} transition={{ease: [0.76,0, 0.24, 1], duration: 1}} animate={{width: "9vw"}} className='mr-5 w-[9vw] h-[5vw] relative rounded-md bg-green-500'></motion.div>)}
          <h1 className='flex items-center uppercase text-[4.5vw] leading-[5vw] font-["Founders_Grotesk_X-Condensed"] font-bold'>
            {item}
          </h1>
          </div>
        </div>
      );
      })}
      
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20'>
        {["For public companie", "From the first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        )}
      <div className='start flex items-center gap-5'>
        <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-mg uppercase  rounded-full'>start the project</div>
        <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
        <span className='rotate-[45deg]'>
        < FaArrowUpLong />
        </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage