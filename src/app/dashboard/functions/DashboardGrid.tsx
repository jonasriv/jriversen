'use client'
import React from 'react';
interface DashboardGridTypes {
    components?: React.ReactNode[];
}

export default function DashboardGrid({ components }: DashboardGridTypes) {
    const content = components?.length ? components 
    : Array(10).fill(0).map((_, i) => (
                <div
                    key={i}
                    className='bg-slate-300 h-32 rounded-lg flex items-center justify-center'
                >
                    Box {i + 1}
                </div>
            ))
    return (
        <div className="grid gap-4 p-4 grid-cols-[repeat(auto_fit,_minmax(200px,_1fr))]">
            {content}
        </div>
    )
}