import React, { useState } from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link';
import Image from 'next/image';
interface CardProps {
    title: string; // Define the type for 'title' (adjust as needed)
    repoName:string
    extratext:string,
    live:string,
    image:string
}
function Card({ title,repoName,extratext="Working on the project",live,image}: CardProps) {
    const [iscliked, setiscliked] = useState(false)
    const [isEnter, setisEnter] = useState(false)
    const setClicked = () => {
        setiscliked(!iscliked);
  setisEnter(!isEnter)
    }
    return (
        <div onMouseEnter={() => { setisEnter(true) }} onMouseLeave={() => { setisEnter(false) }} className='relative overflow-hidden rounded-3xl '>
            <BackgroundGradient>
                <div onClick={() => { setClicked() }} className=" relative overflow-hidden  w-[280px] sm:w-[500px] rounded-[21px] bg-zinc-800 p-4  h-[300px]">
                  <h1>  {title}</h1>
                  <Image src={image} alt="image" fill content='fill'/>
                </div>
            </BackgroundGradient>
            <div onClick={() => { setClicked() }} className={`absolute cursor-pointer transform-gpu flex flex-col  justify-end items-left bg-gradient-to-r  from-neutral-700  to-neutral-700 z-10 p-4 opacity-75  h-[300px] w-[280px] sm:w-[500px]  rounded-[21px] top-1  transition ease-in-out duration-700 right-0 bottom-0 ${isEnter || iscliked ? "  -translate-x-1  " : "-translate-x-[550px]   "} `}>
             <p   className='absolute top-10  p-4 text-xl text-zinc-500 '>{extratext}</p>
              <Link target="_blank" href={`https://github.com/niteshsainicoder/${repoName}`}>  <h5>GitHub Link<span>&#128206;</span> </h5></Link>
              <Link target="_blank" href={`${live}`}>  <h5>Live Link<span>&#128206;</span> </h5></Link>
            </div>
        </div >
    )
}

export default Card