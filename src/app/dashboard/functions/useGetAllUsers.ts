'use client';
import { useEffect } from 'react';
import { User } from '../types/user';

interface GetAllUsersInterface {
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export function useGetAllUsers({ setUsers }:  GetAllUsersInterface ) {
    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const result = await fetch('/users.json');
                if (!result.ok) throw new Error("Users could not be got");
                const data = await result.json();
                setUsers(data.users);
            } catch (err) {
                console.error("Could not fetch user", err);
            }
        }
        fetchAllUsers();
    }, [setUsers]);
} 