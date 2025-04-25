'use client';
import { useEffect } from 'react';
import { User } from '../types/user';

interface GetUserInterface {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    userId: string;
}

export function useGetUser({ user, setUser, userId }:  GetUserInterface ) {
        useEffect(() => {
            if (userId == "") return;
            const fetchUser = async () => {
                try {
                    const result = await fetch('/users.json');
                    if (!result.ok) throw new Error("User could not be got");
                    const data = await result.json();
                    const foundUser = data.users.find((u: User) => u.id.toString() === userId);
                    if (foundUser) {
                        setUser(foundUser);
                    } else {
                        console.warn("User not found");
                    }
                } catch (err) {
                    console.error("Could not fetch user", err);
                }
            }
            if (!user) fetchUser();
        }, [user, setUser, userId]);
} 

