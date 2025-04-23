'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Menu1 from '../Menu1';


export default function Burger() {
    const [activeMenu, setActiveMenu] = useState(false);

    return(
        <div className='flex flex-col '>
            <div 
                className={`w-7 h-7 flex flex-col justify-center items-center gap-[3px] transition-all duration-600 cursor-pointer ${activeMenu ? 'hidden' : '' }`}
                onClick={() => setActiveMenu(!activeMenu)}
            >
                <Menu color={`gray`}/>
            </div>
            <div
                className={`w-7 h-7 flex flex-col justify-center items-center gap-[3px] transition-all duration-600 cursor-pointer ${activeMenu ? '' : 'hidden' }`}
                onClick={() => setActiveMenu(!activeMenu)}
            >
                <X color="gray"/>
            </div>
            <div className='absolute top-14 -right-12'>
                <Menu1 activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            </div>
        </div>
    )
}