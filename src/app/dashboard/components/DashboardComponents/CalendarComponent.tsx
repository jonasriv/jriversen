'use client';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return(
        <div className='bg-slate-500 dark:bg-slate-300 p-2 rounded-lg h-90 overflow-y-scroll border-2 border-slate-600 flex items-start justify-center'>
            <h2></h2>
            <Calendar 
                onChange={onChange} 
                value={value}
                className='react-calendar border-0 h-full w-full text-black rounded-lg bg-black font-black'
            />

            {/* Seksjon for valgt dag: */}
            {value && !Array.isArray(value) && (
                <div className="bg-slate-200 dark:bg-slate-600 w-full h-full p-4 rounded-lg text-black dark:text-white">
                    
                    <p className='font-bold uppercase text-sm'>{formatDate(value)}</p>
                    <div>
                        <p>&nbsp;</p>
                        <p>Ingen hendelser registrert.</p>
                    </div>
                </div>

            )}
        </div>
    )
}