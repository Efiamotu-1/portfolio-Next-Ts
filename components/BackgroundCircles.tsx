import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1, scale: [1, 2, 2, 0.1, 1], borderRadius: [0.1, 0.2, 0.4, 0.1, 0.1, 1.0]}}
    transition={{duration: 2.5}}
    className='relative flex justify-center items-center'>
      <div className='absolute border border-[#F7AB0A]/50 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      {/* <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 '/> */}
      {/* <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 '/> */}
      {/* <div className='absolute border border-[#F7AB0A] opaity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/> */}
      <div className='absolute border border-[#333333] rounded-full h-[800] w-[800] mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles