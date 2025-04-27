'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

type BurgerProps = {
    color?: string;
}

export default function DashboardBurger({ color = "gray" }: BurgerProps ) {
    const [activeMenu, setActiveMenu] = useState(true);

    return(
        <div className='flex flex-col md:hidden'>
            <div 
                className={`w-7 h-7 flex flex-col justify-center items-center gap-[3px] transition-all duration-600 cursor-pointer ${activeMenu ? 'hidden' : '' }`}
                onClick={() => setActiveMenu(!activeMenu)}
            >
                <Menu color={color}/>
            </div>
            <div
                className={`w-7 h-7 flex flex-col justify-center items-center gap-[3px] transition-all duration-600 cursor-pointer ${activeMenu ? '' : 'hidden' }`}
                onClick={() => setActiveMenu(!activeMenu)}
            >
                <X color={color}/>
            </div>
            <div className={`absolute w-full top-13 -right-0 ${activeMenu ? 'opacity-100 h-auto' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                <MobileMenu />
            </div>
        </div>
    )
}