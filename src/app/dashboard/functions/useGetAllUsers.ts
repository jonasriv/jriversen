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
                console.log("HELLO");
                const result = await fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}/data`, {
                    method: 'GET',
                    mode: 'cors'
                });
                if (!result.ok) throw new Error("Users could not be fetched");
                const data = await result.json();
                console.log("DATA: ", data);
                setUsers(data);
                console.log(data);
            } catch (err) {
                console.error("Could not fetch users", err);
            }
        }
        fetchAllUsers();
    }, [setUsers]);
} 