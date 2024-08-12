import React, { useState } from 'react'
import { BackgroundGradient } from './ui/background-gradient'

function Card({ title }) {
    const [iscliked, setiscliked] = useState(false)
    const [isEnter, setisEnter] = useState(false)
    const setClicked = () => {
        setiscliked(!iscliked);
    }
    return (
        <div onMouseEnter={() => { setisEnter(true) }} onMouseLeave={() => { setisEnter(false) }} className='relative '>
            <BackgroundGradient>
                <div onClick={() => { setClicked() }} className="   w-[300px] rounded-3xl p-4 h-[300px]">
                    {title}
                </div>
            </BackgroundGradient>
            <div onClick={() => { setiscliked(false), setisEnter(false) }}
                className={`absolute top-0 left-0 w-full h-full rounded-3xl bg-neutral-200 transition-all duration-500 ease-in-out transform ${iscliked || isEnter ? `scale-150 z-10` : `scale-100 z-0`}`}
                style={{
                    transformOrigin: 'top center',
                }}>
            </div >
        </div >
    )
}

export default Card