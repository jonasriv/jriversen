'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

interface User {
    id: string, 
    username: string, 
    role: string
    email: string,
    image: string,
    access: string[],
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    return(

        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}
