'use client'
import { PersonStanding } from 'lucide-react';
import Burger from './components/ui/Burger';
import DarkSlider from './components/ui/DarkSlider';
import { useScrollToId } from './components/hooks/useScrollToId';

export default function Header() {
    const scrollToId = useScrollToId();

    return (
            <div className='w-full justify-start items-start md:h-14 backdrop-blur-md'>
                <div className="top-0 w-full h-14 bg-white/40 dark:bg-black/50 flex flex-row justify-between items-center px-8">
                    <div 
                        className='p-1 rounded-full flex flex-row gap-4 -rotate-45 cursor-pointer bg-fuchsia-950 dark:bg-fuchsia-950'
                        onClick={() => scrollToId('page-top')}
                    >
                        <PersonStanding color="white" size="24"/>
                    </div>
                    <div className='font-bold text-2xl'>J . R . I V E R S E N</div>
                    <div className='flex flex-row justify-between items-center gap-4'>
                        <div>
                            {/*Dark switch */}
                            <DarkSlider/>
                        </div>
                        
                        {/*Burger for mobile view. */}
                        <div className='md:hidden'>
                            <Burger/>
                        </div>
                    </div>

                    {/* Menu for desktop / tablet or bigger */}
                    <div className='hidden backdropb-blur-md bg-white/40 dark:bg-black/50 md:flex md:absolute top-14 left-0 w-full flex-row px-8'>
                        <ul className="flex flex-row w-full bg-transparent justify-center gap-4 pb-2">
                            <li className='w-1/3 bg-black/30 dark:bg-white/30 hover:bg-white/50 transition-all duration-300 font-semibold text-stone-950 dark:text-stone-300 tracking-widest my-2 p-2 rounded-xl text-center cursor-pointer'>
                                <button 
                                    className='cursor-pointer'
                                    onClick={() => scrollToId('page-top')}
                                >about</button>
                            </li>
                            <li className='w-1/3 bg-black/30 dark:bg-white/30 hover:bg-white/50 transition-all duration-300 font-semibold text-stone-950 dark:text-stone-300 tracking-widest my-2 p-2 rounded-xl text-center cursor-pointer'>
                                <button 
                                    className='cursor-pointer'
                                    onClick={() => scrollToId('projects')}
                                >projects</button>
                            </li>
                            <li className='w-1/3 bg-black/30 dark:bg-white/30 hover:bg-white/50 transition-all duration-300 font-semibold text-stone-950 dark:text-stone-300 tracking-widest my-2 p-2 rounded-xl text-center cursor-pointer'>
                                <button 
                                    className='cursor-pointer'
                                    onClick={() => scrollToId('contact')}
                                >contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}