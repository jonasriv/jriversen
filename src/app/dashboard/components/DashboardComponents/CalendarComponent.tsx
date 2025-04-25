'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
    const [value, onChange] = useState<Value>(new Date());
    return(
        <div className='p-2 rounded-md bg-transparent dark:bg-slate-800 w-fit'>
            <Calendar 
                onChange={onChange} 
                value={value}
                className='react-calendar border-0 h-full max-h-full w-full text-black rounded-lg bg-black font-black'
            />
        </div>
    )
}