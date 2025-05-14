'use client';
import Image from 'next/image';
import { useAuth } from './AuthContext';
import { LayoutDashboardIcon, Users, SquareUser, CircleCheckBig, Calendar, Landmark, CircleHelp } from 'lucide-react';
import { IoIosRemoveCircle, IoIosAddCircle } from 'react-icons/io';
import { useDashboard } from './DashboardContext';
//0import CounterComponent from './components/ui/CounterComponent';

export default function DashboardMenu() {
    const { user } = useAuth();
    const { showingComponents, setShowingComponents } = useDashboard();

    const toggleComponent = (name: string) => {
        if (showingComponents.includes(name)) {
            setShowingComponents(showingComponents.filter(n => n !== name));
        } else {
            setShowingComponents([...showingComponents, name]);
        }
    }
    return (
        <div 
            className='flex bg-slate-400 dark:bg-slate-800 h-full min-h-screen overflow-hidden w-full p-2 flex-col'
        >
            <div className='border-0 flex flex-col gap-4 w-full justify-start items-center mb-12 min-h-42 '>
                <h2 className='uppercase tracking-widest text-xl font-normal border-b-1 hidden md:block'>Admin</h2>
                {user &&
                    <>
                        <Image 
                            src={`https://www.gamlevegen.no/${user.image}`}  // Pass på at user.image f.eks. 'profile.jpg' og ligger i public-mappen
                            alt='Profile picture'
                            height={60}
                            width={60}
                            className='w-14 h-14 rounded-full'
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                        <span className='text-center'>
                            <h2 className='text-xl font-serif text-slate-900 dark:text-slate-300 border-b-1'>{user.username}</h2>
                            <h3 className='text-lg font-serif text-green-800 dark:text-green-600'>{user.role}</h3>
                        </span>
                    </>
                }
            </div>
            <h2 className="border-b-4 border-t-4 border-slate-500 text-sm lg:text-lg font-bold text-center bg-transparent h-12 rounded-xs flex flex-row justify-center gap-4 items-center uppercase tracking-widest">
                <LayoutDashboardIcon size='18'/>
                Elements
            </h2>
            <ul className="mt-4 uppercase tracking-widest font-bold text-slate-900 text-sm">
                <li className={`transition-all duration-200 cursor-pointer w-full my-1 h-12 p-2 flex flex-row justify-between items-center  ${showingComponents.includes('users') ? 'bg-slate-300 shadow-none ' : 'bg-white/30  hover:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-between cursor-pointer h-full'
                        onClick={() => toggleComponent('users')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <Users size={14} color='brown'/>
                            <span className='hidden lg:block'>
                                Users
                            </span>
                            <span className='block lg:hidden text-xs'>
                                Users
                            </span>                            
                        </div>
                    {!showingComponents.includes('users') ? <IoIosAddCircle size={20} color='green'/> : <IoIosRemoveCircle size='20' color='orange'/>}
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full my-1 h-12 p-2 flex flex-row justify-between items-center  ${showingComponents.includes('contacts') ? 'bg-slate-300 shadow-none ' : 'bg-white/30 dark:bg-white/40  hover:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-between cursor-pointer h-full'
                        onClick={() => toggleComponent('contacts')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <SquareUser size={14} color='purple'/>
                            <span className='hidden lg:block'>
                                Contacts
                            </span>
                            <span className='block lg:hidden text-xs'>
                                Cont.
                            </span>                            
                        </div>
                    {!showingComponents.includes('contacts') ? <IoIosAddCircle size={20} color='green'/> : <IoIosRemoveCircle size='20' color='orange'/>}
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full my-1 h-12 p-2 flex flex-row justify-between items-center  ${showingComponents.includes('tasks') ? 'bg-slate-300 shadow-none ' : 'bg-white/30 dark:bg-white/40  hover:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-between cursor-pointer h-full'
                        onClick={() => toggleComponent('tasks')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <CircleCheckBig size={14} color='darkgreen'/>
                            <span className='hidden lg:block'>
                                Tasks
                            </span>
                            <span className='block lg:hidden text-xs'>
                                Tasks
                            </span>                            
                        </div>
                    {!showingComponents.includes('tasks') ? <IoIosAddCircle size={20} color='green'/> : <IoIosRemoveCircle size='20' color='orange'/>}
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full my-1 h-12 p-2 flex flex-row justify-between items-center  ${showingComponents.includes('calendar') ? 'bg-slate-300 shadow-none ' : 'bg-white/30 dark:bg-white/40  hover:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-between cursor-pointer h-full'
                        onClick={() => toggleComponent('calendar')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <Calendar size={14} color='darkorange'/>
                            <span className='hidden lg:block'>
                                Calendar
                            </span>
                            <span className='block lg:hidden text-xs'>
                                Cal.
                            </span>                            
                        </div>
                    {!showingComponents.includes('calendar') ? <IoIosAddCircle size={20} color='green'/> : <IoIosRemoveCircle size='20' color='orange'/>}
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full my-1 h-12 p-2 flex flex-row justify-between items-center  ${showingComponents.includes('money') ? 'bg-slate-300 shadow-none ' : 'bg-white/30 dark:bg-white/40  hover:bg-slate-400'}`}>
                  <button 
                        className='inline-flex gap-2 items-center w-full justify-between cursor-pointer h-full'
                        onClick={() => toggleComponent('money')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <Landmark size={14} color='darkblue'/>
                            <span className='hidden lg:block'>
                                Monetization
                            </span>
                            <span className='block lg:hidden text-xs'>
                                Rev.
                            </span>                            
                        </div>
                    {!showingComponents.includes('money') ? <IoIosAddCircle size={20} color='green'/> : <IoIosRemoveCircle size='20' color='orange'/>}
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full my-1 h-12 p-2 flex flex-row justify-between items-center  ${showingComponents.includes('faq') ? 'bg-slate-300 shadow-none ' : 'bg-white/30 dark:bg-white/40  hover:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-between cursor-pointer h-full'
                        onClick={() => toggleComponent('faq')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <CircleHelp size={14} color='red'/>
                            <span className='hidden lg:block'>
                                FAQ
                            </span>
                            <span className='block lg:hidden text-xs'>
                                Faq
                            </span>                            
                        </div>
                    {!showingComponents.includes('faq') ? <IoIosAddCircle size={20} color='green'/> : <IoIosRemoveCircle size='20' color='orange'/>}
                    </button>
                </li>
            </ul>
            {/* <CounterComponent/> */}
        </div>
    );
}
