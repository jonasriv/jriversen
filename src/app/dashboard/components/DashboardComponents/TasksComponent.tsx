'use client';
import { useEffect, useState } from "react";
import { CircleCheckBig, CircleArrowDown, CircleArrowUp } from 'lucide-react';

type TaskType = {
    taskname: string,
    completed: boolean, 
    priority: 'low' | 'normal' | 'high'
}

export default function TasksComponent() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskPriority, setNewTaskPriority] = useState("");
    const [addingTask, setAddingTask] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function addTask( {taskname, priority, completed }: TaskType) {
        const newTask: TaskType = {
            taskname, 
            completed,
            priority,
        };        
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTaskName("");
        setNewTaskPriority("");
        setAddingTask(false);
    }

    function removeTask (passedTask: TaskType) {
        const filteredTasks = tasks.filter((task) => task.taskname !== passedTask.taskname);
        setTasks(filteredTasks);
    }

    if(!mounted) return null;

    return(
        <div className="h-auto md:h-90 overflow-y-scroll overflow-x-hidden border-2 border-slate-600 rounded-lg bg-slate-500 dark:bg-slate-300">
            <h2 className="inline-flex items-center justify-between py-4 text-slate-300 dark:text-slate-800 uppercase tracking-wider p-2 w-full">
                <CircleCheckBig/>
                Tasks 
            </h2>
            <div className="w-full px-2 flex flex-col mb-2">
                {tasks.map((task, index) => (
                    <div 
                        key={index}
                        className={`h-10 inline-flex items-center justify-between text-black px-2 ${index % 2 === 0 ? 'bg-slate-400' : 'bg-slate-400/50'}`}
                    >
                        {task.taskname} <span className={`uppercase text-xs tracking-wider ${task.priority === 'high' ? 'text-red-600' : 'text-slate-800' }`}>(Priority: {task.priority})</span>
                        <button 
                            className="h-4 w-4 bg-white rounded-sm hover:bg-red-400 cursor-pointer"
                            onClick={() => {removeTask(task)}}
                        >
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-start justify-start w-full px-2">
                <button
                    className="w-full p-2 bg-green-400/70 dark:bg-green-700 mx-2 rounded-lg inline-flex items-center justify-between cursor-pointer hover:bg-green-600"  
                    onClick={() => setAddingTask(!addingTask)}  
                >
                    Add new task
                    {addingTask ? <CircleArrowUp/> : <CircleArrowDown/>}
                </button>
                <span className={`mb-4 flex flex-col w-full border-2 rounded-lg border-slate-400 p-4 gap-2 mt-4 overflow-hidden  ${addingTask ? 'opacity-100 max-h-auto' : 'opacity-0 max-h-0'}`}>
                    <input
                        type="text"
                        className="w-full bg-white h-10 rounded-lg p-2 text-black"
                        name="taskname"
                        placeholder="Task name"
                        value={newTaskName}
                        onChange={(e) => {setNewTaskName(e.target.value)}}
                    />
                    <select 
                        name="newTaskPriority"
                        value={newTaskPriority}
                        onChange={(e) => {setNewTaskPriority(e.target.value)}}
                        className="bg-slate-300 h-10 rounded-lg p-2 text-black "
                    >
                        <option disabled value="">Priority:</option>
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </select>
                    <button 
                        onClick={() => addTask({taskname: newTaskName, priority: newTaskPriority as 'low' | 'normal' | 'high', completed: false})}
                        className="w-full bg-slate-300 dark:bg-slate-500 h-10 rounded-lg hover:bg-slate-200 cursor-pointer"
                    >Add task
                    </button>
                </span>
            </div>  
        </div>
    )
}