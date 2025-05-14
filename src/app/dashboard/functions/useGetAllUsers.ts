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
                console.log("HERE COMES SERVER:")
                const result = await fetch(`https://www.gamlevegen.no/data`, {
                    method: 'GET',
                    mode: 'cors'
                });
                if (!result.ok) throw new Error("Users could not be fetched");
                const data = await result.json();
                console.log(data);
                setUsers(data);
                console.log(data);
            } catch (err) {
                console.error("Could not fetch users", err);
            }
        }
        fetchAllUsers();
    }, [setUsers]);
} 