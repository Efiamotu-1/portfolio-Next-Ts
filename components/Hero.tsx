import Link from 'next/link'
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi The name's ${pageInfo?.name}`,
            "Guy who loves contributing to open source project",
            "<and loves to code./>"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
        <BackgroundCircles />
        <img 
        className='rounded-full h-40 w-40 object-cover mx-auto relative'
        src={urlFor(pageInfo?.heroImage).url()} width={2} height={1} 
        alt="profile"/>
        <div className='z-20 text-center'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo?.role}
            </h2>
            <h4 className='text-xl lg:text-2xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='blue' />
            </h4>
        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
                
            </Link>

            <Link href="#experience">
            <button className='heroButton'>Experience</button>
                
                </Link>

                <Link href="#skills">
                
            <button className='heroButton'>Skills</button>
                </Link>

                <Link href="#projects">
            <button className='heroButton'>Projects</button>
                
                </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero