import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'


type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <div className='md:space-y-20 md:mt-0 mt-10 overflow-y-scroll snap-start h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
        <h3 className='text-center my-10 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1.5}}
        className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <div className='relative w-full flex overflow-x-scroll overflow-y-scroll overflow-y-hidden snap-x snap-mandatory
            z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                {projects.map((project, i) => (
                    <div key={i} className='w-screen flex-shrink-0 flex flex-col space-y-5 
                    items-center justify-center p-20 md:p-44 '>
                        <motion.img 
                            initial={{opacity: 0, y: -300}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{ duration: 1.2}}
                            viewport={{once: true}}
                            src={urlFor(project?.image).url()}
                            alt="" />

                        <div className='space-y-0 px-0 my-1 md:px-10 max-w-full'>
                            <h4 className='text-2xl font-semibold text-center'>
                                {project?.title}{" "}
                                <a
                                target="_blank" 
                                rel="noreferrer"  
                                href={project?.linkToBuild}
                                className='underline decoration-[#F7AB0A]/50'>
                                    {" "}(See live Version)
                                </a>
                            </h4>
                            

                            {/* {project?.technologies.map((technology) => (
                            <div className="flex items-center space-x-2 justify-center">
                                    <img 
                                    className="h-5 w-5"
                                    key={technology._id}
                                    src={urlFor(technology?.image).url()}
                                    alt=" "
                                    />
                            </div>
                            ))} */}

                            <p className='text-center md:text-left text-lg'>
                                {project?.summary}
                                </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>

        </motion.div>
    </div>

  )
}

export default Projects