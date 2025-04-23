'use client'

import React from 'react';
import { useScrollToId } from './hooks/useScrollToId';

interface MenuProps {
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu1({ activeMenu, setActiveMenu }: MenuProps) {
    const scrollToId = useScrollToId();

    return (
        <div 
            className={`bg-black/60 backdrop-blur-lg flex flex-col md:hidden min-w-screen max-w-screen mr-12 rounded-bl-xl ${activeMenu ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}
            onClick={() => {setActiveMenu(!activeMenu)}}    
        >
            <ul className='flex flex-col justify-start items-center gap-3 h-screen backdrop-blur-lg'>
                <li className='bg-white/60 my-2 p-2 rounded-xl text-center w-[80%] text-slate-800 font-bold tracking-wider cursor-pointer hover:bg-white/80 transition-all duration-300 mt-8'>
                    <button onClick={() => scrollToId('about')}>about</button>
                </li>
                <li className='bg-white/60 my-2 p-2 rounded-xl text-center w-[80%] text-slate-800 font-bold tracking-wider cursor-pointer hover:bg-white/80 transition-all duration-300'>
                    <button onClick={() => scrollToId('projects')}>projects</button>
                </li>
                <li className='bg-white/60 my-2 p-2 rounded-xl text-center w-[80%] text-slate-800 font-bold tracking-wider cursor-pointer hover:bg-white/80 transition-all duration-300'>
                    <button onClick={() => scrollToId('projects')}>contact</button>
                </li>
            </ul>
        </div>
    )
}