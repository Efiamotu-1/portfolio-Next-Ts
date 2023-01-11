import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {EnvelopeIcon} from '@heroicons/react/24/solid';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings';

type Props = {
  socials: Social[]
}

const Header = ({socials}: Props) => {
  return (
    <header className='flex items-center justify-between max-w-7xl mx-auto z-20'>
        <motion.div 
          initial={{ x: -500,opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{duration: 1.5}}
        className='flex flex-row items-center snap-start'>
            {/* Social Icons */}
            {socials.map((social) => (
            <SocialIcon 
            key={social._id}
            url={social.url} 
            fgColor='gray' 
            bgColor='transparent'/>
            ))}
        </motion.div>

        <Link href="#contact">
          <motion.div 
          initial={{x: 500, opacity: 0, scale: 1.5}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5}}
          className='text-gray-300 cursor-pointer flex items-center space-x-2'>
            <EnvelopeIcon className="cursor-pointer h-8 w-8 animate-pulse"/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400' >get in touch</p> 
          </motion.div>
        </Link>
    </header>
  )
}


export default Header