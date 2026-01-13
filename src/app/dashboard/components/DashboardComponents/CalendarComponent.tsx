'use client';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Calendar as CalendarIcon } from 'lucide-react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
    const [value, onChange] = useState<Value>(new Date());
    const [mounted,  setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('no-No', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return(
        <div className='dashboard-component-outer'>
            <h2 className='dashboard-component-header'>
                <CalendarIcon/>
                Calendar
            </h2>
            <div className='flex flex-col md:flex-row gap-1 overflow-hidden w-full'>
                <Calendar 
                    onChange={onChange} 
                    value={value}
                    className='react-calendar border-0 h-full md:w-7/12 text-black rounded-lg md:rounded-none font-black bg-transparent'
                />

                {/* Seksjon for valgt dag: */}
                {value && !Array.isArray(value) && (
                    <div className="bg-slate-200 dark:bg-slate-600 md:w-5/12 h-full p-4 rounded-lg overflow-hidden text-black dark:text-white">
                        
                        <p className='font-bold uppercase text-sm'>{formatDate(value)}</p>
                        <div>
                            <p>&nbsp;</p>
                            <p>Ingen event registrert.</p>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}