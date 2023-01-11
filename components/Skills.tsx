import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType} from '../typings'

type Props = {
  skills: SkillType[]
}

const Skills = ({skills}: Props) => {
  const skilled = skills.slice(1)
  return (
    <div className='md:space-y-20 space-y-5 overflow-y-scroll snap-start h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
      <h3 className='text-center mt-5 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='text-center uppercase tracking-[3px] text-gray-500 text-sm'>Hover above a skill for current proficiency</h3>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-width-[2000px] xl:px-10 
      min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
          
          <div className='grid grid-cols-4 gap-5'>
            {skills?.slice(0, skills.length / 2).map((skill) => (
              <Skill 
              key={skill._id}
              skill={skill}
              />
            ))}

              {skills?.slice(skills.length / 2, skills.length).map((skill) => (
              <Skill 
              key={skill._id}
              skill={skill}
              directionLeft
              />
            ))}

            
          </div>
      </motion.div>
    </div>
  )
}

export default Skills