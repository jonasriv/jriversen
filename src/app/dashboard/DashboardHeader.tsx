'use client'
import { LayoutDashboardIcon, Settings } from 'lucide-react';
import DashboardBurger from './components/DashboardBurger';
import DarkSlider from '../components/ui/DarkSlider';
import Image from 'next/image';
import { useAuth } from './AuthContext';
import { useGetUser } from './functions/useGetUser';
import { useState } from 'react';
import { User } from './types/user';
import { useGetAllUsers } from './functions/useGetAllUsers';

export default function DashboardHeader() {
    const { user, setUser } = useAuth();
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    
    useGetAllUsers({ setUsers: setAllUsers });

    useGetUser({ user: loggedInUser, setUser: setLoggedInUser, userId: user?.id || '' });

    const handleUserSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        if (!allUsers) return;
        const selectedUserId = e.target.value;
        const selectedUser = allUsers.find((u: User) => u.id.toString() === selectedUserId.toString());
        if (selectedUser) {
            setUser(selectedUser);
        }
    }

    return (
            <div className='justify-start items-start h-1/12 bg-slate-500 dark:bg-slate-700 md:bg-transparent'>
                <div className='justify-start items-start h-full bg-slate-300/80 dark:bg-slate-700'>
                    <div className="w-full h-full bg-transparent flex flex-row justify-between items-center px-2">
                        <div 
                            className='px-4 py-2 rounded-xl flex flex-row justify-start items-center gap-4 cursor-pointer bg-transparent'
                        >
                            <LayoutDashboardIcon color={`orange`} size="24"/>
                            <div className='text-md md:text-xl lowercase tracking-widest items-center'>Dashboard</div>
                        </div>
                        <div className='flex flex-row gap-4 items-center py-2 px-6 rounded-sm '>
                            <div id="select_user" className='bg-slate-300 text-slate-800  px-6 flex flex-row justify-start items-start py-2 rounded-xl'>
                                <select onChange={handleUserSelect} value={user?.id || ''}>
                                    <option value="" disabled className=''>Select user:</option>
                                    {allUsers.map((u: User) => (
                                        <option key={u.id} value={u.id}>
                                            {u.name} ({u.position})
                                        </option>
                                    ))}
                                    <option></option>
                                </select>
                            </div>
                            <div>
                            {user && (
                                <Image
                                    src={`/${user.image}`}
                                    width={50}
                                    height={50}
                                    alt="Profile picture"
                                    className="w-8 h-8 rounded-full"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            )}

                            </div>   
                        </div>
                            <div className='flex flex-row justify-end items-center gap-8'>

                            <div>
                                {/*Dark switch */}
                                <DarkSlider/>
                            </div>
                            {/* Profile image*/}
                            <Settings color="gray"/>
                            {/*Burger for mobile view. */}
                            <div className='md:hidden'>
                                <DashboardBurger color='black'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    )
}