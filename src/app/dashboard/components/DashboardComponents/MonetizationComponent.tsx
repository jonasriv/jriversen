'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import { Landmark } from 'lucide-react';
const data = [
    { name: 'Jan', revenue: 400},
    { name: 'Feb', revenue: 700},
    { name: 'Mar', revenue: 200},
    { name: 'Apr', revenue: 300},
    { name: 'May', revenue: 700},
    { name: 'Jun', revenue: 600},
    { name: 'Jul', revenue: 500},
]
export default function MonetizationComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) return null;

    return(
        <div className='flex flex-col gap-2 items-start justify-center p-2 h-90 overflow-y-scroll border-2 border-slate-600 rounded-lg bg-slate-500 dark:bg-slate-300'>
            <h2 className='p-2 inline-flex items-center justify-between px-2 w-full text-lg uppercase tracking-wider text-slate-300 dark:text-slate-700'>
                <Landmark/>    
                Revenue history
            </h2>
            <div className='bg-slate-200 p-2 rounded-lg flex justify-center items-start w-full'>
                <LineChart width={330} height={260} data={data}>
                    <CartesianGrid stroke='#ccc'/>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8"/>
                </LineChart>
            </div>
        </div>
    )
}