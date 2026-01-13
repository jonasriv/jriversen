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
            className='flex h-full min-h-screen overflow-hidden w-full p-2 flex-col menu-background border-r-4 border-slate-300 dark:border-slate-400 '
        >
            <div className='border-0 flex flex-col gap-4 w-full justify-start items-center mb-12 min-h-42 '>
                <h2 className='uppercase tracking-widest text-xl font-normal border-b-1 hidden md:block mt-4'>DASHBOARD</h2>
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
                            <h3 className='text-lg font-serif text-emerald-700 dark:text-emerald-600'>{user.role}</h3>
                        </span>
                    </>
                }
            </div>
            <h2 className="border-y-2 border-slate-500 text-sm lg:text-lg font-bold text-center bg-transparent h-12 rounded-xs flex flex-row justify-center gap-4 items-center uppercase tracking-widest">
                <LayoutDashboardIcon color={`#d63c04`} size="24"/>
                Elements 
            </h2>
            
            <ul className="mt-4">
                {user?.access.includes('users') && 
                    <li className={`dashboard-menubutton ${showingComponents.includes('users') ? 'dashboard-menubutton-active' : 'dashboard-menubutton-passive'}`}>
                        <button 
                            className='inline-flex gap-2 items-center w-full justify-between h-full'
                            onClick={() => toggleComponent('users')}
                        > 
                            <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-sm items-center'>
                                <span className='dashboard-button-image'><Users size={18} color='brown'/></span>
                                <span className='hidden lg:block text-bright-dark'>
                                    Users
                                </span>
                                <span className='block lg:hidden text-xs'>
                                    Users
                                </span>                            
                            </div>
                        {!showingComponents.includes('users') ? <IoIosAddCircle size={20} color='orange'/> : <IoIosRemoveCircle size='20' color='green'/>}
                        </button>
                    </li>
                }
                {user?.access.includes('contacts') &&                 
                    <li className={`dashboard-menubutton ${showingComponents.includes('contacts') ? 'dashboard-menubutton-active' : 'dashboard-menubutton-passive'}`}>
                        <button 
                            className='inline-flex gap-2 items-center w-full justify-between h-full'
                            onClick={() => toggleComponent('contacts')}
                        >
                            <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-sm items-center'>
                                <span className='dashboard-button-image'><SquareUser size={18} color='purple'/></span>
                                <span className='hidden lg:block text-bright-dark'>
                                    Contacts
                                </span>
                                <span className='block lg:hidden text-xs'>
                                    Cont.
                                </span>                            
                            </div>
                        {!showingComponents.includes('contacts') ? <IoIosAddCircle size={20} color='orange'/> : <IoIosRemoveCircle size='20' color='green'/>}
                        </button>
                    </li>
                }
                {user?.access.includes('tasks') &&                     
                    <li className={`dashboard-menubutton ${showingComponents.includes('tasks') ? 'dashboard-menubutton-active' : 'dashboard-menubutton-passive'}`}>
                        <button 
                            className='inline-flex gap-2 items-center w-full justify-between h-full'
                            onClick={() => toggleComponent('tasks')}
                        >
                            <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-sm items-center'>
                                <span className='dashboard-button-image'><CircleCheckBig size={18} color='darkgreen'/></span>
                                <span className='hidden lg:block text-bright-dark'>
                                    Tasks
                                </span>
                                <span className='block lg:hidden text-xs'>
                                    Tasks
                                </span>                            
                            </div>
                        {!showingComponents.includes('tasks') ? <IoIosAddCircle size={20} color='orange'/> : <IoIosRemoveCircle size='20' color='green'/>}
                        </button>
                    </li>
                }
                {user?.access.includes('calendar') && 
                    <li className={`dashboard-menubutton ${showingComponents.includes('calendar') ? 'dashboard-menubutton-active' : 'dashboard-menubutton-passive'}`}>
                        <button 
                            className='inline-flex gap-2 items-center w-full justify-between h-full'
                            onClick={() => toggleComponent('calendar')}
                        >
                            <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-sm items-center'>
                                <span className='dashboard-button-image'><Calendar size={18} color='darkorange'/></span>
                                <span className='hidden lg:block text-bright-dark'>
                                    Calendar
                                </span>
                                <span className='block lg:hidden text-xs'>
                                    Cal.
                                </span>                            
                            </div>
                        {!showingComponents.includes('calendar') ? <IoIosAddCircle size={20} color='orange'/> : <IoIosRemoveCircle size='20' color='green'/>}
                        </button>
                    </li>
                }
                {user?.access.includes('monetization') &&                 
                    <li className={`dashboard-menubutton ${showingComponents.includes('money') ? 'dashboard-menubutton-active' : 'dashboard-menubutton-passive'}`}>
                    <button 
                            className='inline-flex gap-2 items-center w-full justify-between h-full'
                            onClick={() => toggleComponent('money')}
                        >
                            <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-sm items-center'>
                                <span className='dashboard-button-image'><Landmark size={18} color='darkblue'/></span>
                                <span className='hidden lg:block text-bright-dark'>
                                    Monetization
                                </span>
                                <span className='block lg:hidden text-xs'>
                                    Rev.
                                </span>                            
                            </div>
                        {!showingComponents.includes('money') ? <IoIosAddCircle size={20} color='orange'/> : <IoIosRemoveCircle size='20' color='green'/>}
                        </button>
                    </li>
                }
                {user?.access.includes('faq') && 
                    <li className={`dashboard-menubutton ${showingComponents.includes('faq') ? 'dashboard-menubutton-active' : 'dashboard-menubutton-passive'}`}>
                        <button 
                            className='inline-flex gap-2 items-center w-full justify-between h-full'
                            onClick={() => toggleComponent('faq')}
                        >
                            <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-sm items-center'>
                                <span className='dashboard-button-image'><CircleHelp size={18} color='red'/></span>
                                <span className='hidden lg:block text-bright-dark'>
                                    FAQ
                                </span>
                                <span className='block lg:hidden text-xs'>
                                    Faq
                                </span>                            
                            </div>
                        {!showingComponents.includes('faq') ? <IoIosAddCircle size={20} color='orange'/> : <IoIosRemoveCircle size='20' color='green'/>}
                        </button>
                    </li>
                }
            </ul>
            {/* <CounterComponent/> */}
        </div>
    );
}
