'use client'
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
export default function DarkSlider () {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const changeTheme = () => {
        if (theme == 'light') setTheme('dark');
        if (theme == 'dark') setTheme('light');
    }
    
    return (
        <div 
            className={`w-9 h-5 rounded-3xl flex flex-row transition-all duration-900 items-center ${theme == 'light' ? ' bg-gray-500' : ' bg-gray-300 '}`}
            onClick={changeTheme}
        >
            <div suppressHydrationWarning className={`flex  w-3 h-3 items-center transition-all duration-500 rounded-full ${theme == 'light' ? 'ml-1' : 'ml-5'}`}>
                {theme == 'light' && <span suppressHydrationWarning><MdSunny size='14' color="yellow"/></span>}
                {theme == 'dark' && <span suppressHydrationWarning><FaMoon size='14' color="blue"/></span>}
            </div>
            
        </div>
    )
}