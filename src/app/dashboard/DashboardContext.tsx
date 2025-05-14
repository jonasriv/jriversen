import { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardContextType {
    showingComponents: string[];
    setShowingComponents: React.Dispatch<React.SetStateAction<string[]>>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

interface DashProviderProps{
    children: ReactNode;
}



export function DashProvider({ children }: DashProviderProps) {
    const [showingComponents, setShowingComponents] = useState<string[]>([
        'users', 'account', 'calendar', 'contacts', 'money', 'faq'
      ]);
      
    
    return (
        <DashboardContext.Provider value={{ showingComponents, setShowingComponents }}>
            {children}
        </DashboardContext.Provider>
    )
}

export function useDashboard() {
    const context = useContext(DashboardContext);
    if(!context) {
        throw new Error('useDashBoard must be used within a DashProvider');
    }
    return context;
}

