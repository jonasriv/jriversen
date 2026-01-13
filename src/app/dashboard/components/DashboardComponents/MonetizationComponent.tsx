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
        <div className='dashboard-component-outer'>
            <h2 className='dashboard-component-header'>
                <Landmark/>    
                Revenue history
            </h2>
            <div className='bg-slate-200 p-2 rounded-lg flex justify-center items-start w-full h-full'>
                <LineChart
                width={600}
                height={260}
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" tick={{ fontSize: 18, fill: "black" }} />
                    <YAxis tick={{ fontSize: 14, fill: "#555" }} />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#fff", borderColor: "#ccc", borderRadius: 10 }}
                        labelStyle={{ color: "#000000", fontWeight: "bold" }}
                    />
                    <Legend
                        verticalAlign="top"
                        height={36}
                        wrapperStyle={{ fontSize: 20, color: "#333" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="darkorange"
                        strokeWidth={3}
                        dot={{ r: 4, stroke: 'blue', strokeWidth: 2, fill: 'blue' }}
                        activeDot={{ r: 7 }}
                    />
                </LineChart>
            </div>
        </div>
    )
}