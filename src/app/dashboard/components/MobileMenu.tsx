'use client';
import { Users, SquareUser, CircleCheckBig, Calendar, Landmark, CircleHelp } from 'lucide-react';
import { useDashboard } from '../DashboardContext';

export default function MobileMenu() {
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
            className='flex md:hidden md:pointer-events-none min-w-screen flex-row w-screen justify-end'
        >
            <ul className="uppercase tracking-widest font-bold text-slate-900 text-sm flex flex-col h-full w-20 bg-slate-700 dark:bg-slate-500 p-2 rounded-bl-lg">
                <li className={`transition-all duration-200 cursor-pointer w-full h-12 flex flex-row justify-center items-center  ${showingComponents.includes('users') ? 'bg-slate-300' : 'bg-slate-400 dark:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-center cursor-pointer h-full'
                        onClick={() => toggleComponent('users')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <Users size={20} color='brown'/>                        
                        </div>
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full h-12 flex flex-row justify-center items-center  ${showingComponents.includes('contacts') ? 'bg-slate-300' : 'bg-slate-400 dark:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-center cursor-pointer h-full'
                        onClick={() => toggleComponent('contacts')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <SquareUser size={20} color='purple'/>                       
                        </div>
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full h-12 flex flex-row justify-center items-center  ${showingComponents.includes('tasks') ? 'bg-slate-300' : 'bg-slate-400 dark:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-center cursor-pointer h-full'
                        onClick={() => toggleComponent('tasks')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <CircleCheckBig size={20} color='darkgreen'/>                         
                        </div>
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full h-12 flex flex-row justify-center items-center  ${showingComponents.includes('calendar') ? 'bg-slate-300' : 'bg-slate-400 dark:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-center cursor-pointer h-full'
                        onClick={() => toggleComponent('calendar')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <Calendar size={20} color='darkorange'/>                          
                        </div>
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full h-12 flex flex-row justify-center items-center  ${showingComponents.includes('money') ? 'bg-slate-300' : 'bg-slate-400 dark:bg-slate-400'}`}>
                  <button 
                        className='inline-flex gap-2 items-center w-full justify-center cursor-pointer h-full'
                        onClick={() => toggleComponent('money')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <Landmark size={20} color='darkblue'/>                          
                        </div>
                    </button>
                </li>
                <li className={`transition-all duration-200 cursor-pointer w-full h-12 flex flex-row justify-center items-center  ${showingComponents.includes('faq') ? 'bg-slate-300' : 'bg-slate-400 dark:bg-slate-400'}`}>
                    <button 
                        className='inline-flex gap-2 items-center w-full justify-center cursor-pointer h-full'
                        onClick={() => toggleComponent('faq')}
                    >
                        <div className='inline-flex gap-2 uppercase tracking-widest font-bold text-slate-900 text-sm items-center'>
                            <CircleHelp size={20} color='red'/>                           
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
}
