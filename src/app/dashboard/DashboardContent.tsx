'use client';
import { useDashboard } from './DashboardContext';
import { useAuth } from './AuthContext';

import * as DashboardComponents from './components/DashboardComponents'; 
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DragEndEvent } from '@dnd-kit/core';

import {CSS} from '@dnd-kit/utilities';
import { useState, useEffect } from 'react';

const componentMap = {
    users: DashboardComponents.UsersComponent,
    tasks: DashboardComponents.TasksComponent,
    calendar: DashboardComponents.CalendarComponent,
    contacts: DashboardComponents.ContactsComponent,
    money: DashboardComponents.MonetizationComponent,
    faq: DashboardComponents.FaqComponent,
}

function SortableItem({id, children}: { id: string; children: React.ReactNode }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className=''>
        {/* Legger til en "drag handle" for DnD */}
        <div className="hidden md:flex w-full justify-start p-1 cursor-grab" {...attributes} {...listeners}>
            <div className="bg-gray-400 p-1 w-6 h-6 rounded-full flex items-center justify-center text-black  text-xs">
                ::
            </div>
        </div>
        {/* Resten av children - uten drag listeners */}
        {children}
    </div>
    );
}



export default function DashboardContent() {
    const { showingComponents, setShowingComponents } = useDashboard();
    const countComponents: number = showingComponents.length;
    const [mounted, setMounted] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        setMounted(true);
        setShowingComponents([]);
    }, [setShowingComponents]);

        useEffect(() => {
        setShowingComponents([]);
    }, [user, setShowingComponents]);
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;

        if (over && active.id !== over.id) {
            const oldIndex = showingComponents.indexOf(active.id as string);
            const newIndex = showingComponents.indexOf(over.id as string);

            const newOrder = arrayMove(showingComponents, oldIndex, newIndex);
            setShowingComponents(newOrder); 
        }
    };

    if(!mounted) return null;

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext
                items={showingComponents}
                strategy={verticalListSortingStrategy}
            > 
                <div className={`h-full border-t-2 border-slate-400 p-2 pb-24 fancy-background md:grid md:grid-cols-2 ${countComponents <= 4 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} justify-start items-start gap-4`}>
                    {user == null && <p>Please sign in!</p>}
                    {countComponents < 1 && user && <p>Please toggle components</p>}
                    {showingComponents && showingComponents.map((key) => {
                        const Component = componentMap[key as keyof typeof componentMap];
                        return Component 
                        ? 
                        <SortableItem key={key} id={key}>
                            <div 
                                key={key} 
                                className={`w-full h-full ${key === 'calendar' ? 'col-span-1 row-span-1' : 'col-span-1 row-span-1'}`}
                            >
                                <div className='w-full max-w-[600px] bg-slate-500 dark:bg-slate-400 h-full min-h-[100%] rounded-lg mb-4'>
                                    <Component />
                                </div>
                            </div> 
                        </SortableItem>
                        : null;
                    })}

                    
                </div>
            </SortableContext>    
        </DndContext>
    )
}