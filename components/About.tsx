import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <div className='space-y-5 overflow-y-scroll h-screen md:flex flex-col justify-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
      <h3 className=' uppercase tracking-[20px] text-center text-gray-500 text-2xl'>About</h3>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className=' flex flex-col text-center md:text-left mx-4
      md:flex-row md:max-w-5xl justify-evenly md:mx-auto items-center'>

      <motion.img 
      initial={{x: -200, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 1.2}}
      src={urlFor(pageInfo.profilePic).url()}
      className='h-56 w-56 mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover
       md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 md:px-4'>
        <h4 className='text-4xl font-semibold'>Here&apos;s a little <span className='underline decoration-[#FABA0A]'>information</span> about me</h4>
        <p className='text-sm'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
      </motion.div>
     </div>
  )
}

export default About 