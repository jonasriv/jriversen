'use client';
import DashboardMenu from "./DashboardMenu";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import { AuthProvider } from "./AuthContext";
import { DashProvider } from "./DashboardContext";

export default function Dashboard() {
    return (
        <DashProvider>
            <AuthProvider>
                <div className="bg-gray-300 dark:bg-slate-800 min-h-screen max-h-screen min-w-full w-full overflow-y-scroll lg:overflow-hidden lg:h-screen">
                    
                    <div id="main_div" className="flex h-full min-w-full justify-start flex-row items-start">
                        <div className="md:w-1/6 hidden md:flex">
                            <DashboardMenu/>
                        </div>
                        <div className="w-screen bg-slate-300 dark:bg-slate-500min-h-[400px] h-full">
                            <DashboardHeader/>
                            <DashboardContent/>
                        </div>
                    </div>
                </div>
            </AuthProvider>
        </DashProvider>
    )
}