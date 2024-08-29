import React, { useState } from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link';
interface CardProps {
    title: string; // Define the type for 'title' (adjust as needed)
    repoName:string
    extratext:string
}
function Card({ title,repoName,extratext="Working on the project"}: CardProps) {
    const [iscliked, setiscliked] = useState(false)
    const [isEnter, setisEnter] = useState(false)
    const setClicked = () => {
        setiscliked(!iscliked);
    }
    return (
        <div onMouseEnter={() => { setisEnter(true) }} onMouseLeave={() => { setisEnter(false) }} className='relative overflow-hidden rounded-3xl '>
            <BackgroundGradient>
                <div onClick={() => { setClicked() }} className=" relative  w-[280px] sm:w-[300px] rounded-3xl bg-zinc-800 p-4  h-[300px]">
                    {title}
                </div>
            </BackgroundGradient>
            <div className={`absolute flex flex-col justify-end items-left bg-gradient-to-r  from-neutral-700  to-transparent z-10 p-8 h-[300px] w-[280px] sm:w-[300px]  rounded-3xl top-1  transition ease-in-out duration-700 right-0 bottom-0 ${isEnter || iscliked ? "  -translate-x-1  " : "-translate-x-96   "} `}>
             <p className='absolute top-10 p-2 text-xl text-zinc-500'>{extratext}</p>
              <Link target="_blank" href={`https://github.com/niteshsainicoder/${repoName}`}>  <h5>GitHub Link<span>&#128206;</span> </h5></Link>
              <Link target="_blank" href={`https://github.com/niteshsainicoder/${repoName}`}>  <h5>Live Link<span>&#128206;</span> </h5></Link>
            </div>
        </div >
    )
}

export default Card