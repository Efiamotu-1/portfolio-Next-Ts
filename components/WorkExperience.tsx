import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

const WorkExperience = ({experiences}: Props) => {
  return (
    <div className='space-y-20 overflow-y-scroll snap-start h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
    <h3 className='uppercase my-10 tracking-[20px] text-center text-gray-500 text-2xl'>Experience</h3>
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1.5}}
    className='flex  flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
    <div className='flex w-full space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#F7AB0A]'>
      
      {experiences.map((experience) => (
      <ExperienceCard 
      key={experience._id}
      experience={experience}
      
      />
      ))}

     
    </div>    
    </motion.div>
    </div>

  )
}

export default WorkExperience