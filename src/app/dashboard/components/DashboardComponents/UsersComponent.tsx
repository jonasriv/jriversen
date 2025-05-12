'use client';
import { useGetAllUsers } from "../../functions/useGetAllUsers";
import { User } from '../../types/user';
import { useState } from "react";
import { Users } from 'lucide-react';
import Image from 'next/image';

export default function UsersComponent() {
    const [users, setUsers] = useState<User[]>([]);
    useGetAllUsers({ setUsers })

    return(
        <div className="w-full h-auto md:h-90 p-2 overflow-y-scroll rounded-lg border-3 border-slate-600 bg-slate-500 dark:bg-slate-300">
            <h2 className="inline-flex items-center justify-between text-slate-200 dark:text-slate-700 text-xl w-full p-2 uppercase px-2 rounded-lg">
                <span className="border-2 border-slate-200 dark:border-slate-700 rounded-sm p-[2px] pb-0"><Users size='18'/></span>
                Users 
            </h2>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
                {users?.map((user, index) => (
                    
                    <div className="flex flex-col bg-slate-300 dark:bg-slate-500 p-2 rounded-lg w-full tracking-wider " key={index}>
                        <span className="text-xl inline-flex items-center gap-2 mb-4">
                            
                            <Image  
                                src={`${process.env.NEXT_PUBLIC_API_ADDRESS}/${user.image}`}
                                alt="UserImage"
                                width={50}
                                height={50}
                                className="rounded-full "
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            {user.username}
                        </span>
                        <span><b>Role</b>: {user.role}</span>
                        <span><b>Mail</b>: {user.email}</span>
                        <span><b>Access</b>: 
                            <ul className="flex flex-row italic divide-x-2">
                                {user.access.map((item, index) => (
                                    <li key={index} className={`pr-2 ${index > 0 ? 'pl-2' : ''}`}>
                                        {item}

                                    </li>
                                ))}
                            </ul>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}