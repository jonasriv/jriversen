'use client';
import { useDashboard } from './DashboardContext';
import * as DashboardComponents from './components/DashboardComponents'; 

const componentMap = {
    users: DashboardComponents.UsersComponent,
    account: DashboardComponents.AccountComponent,
    calendar: DashboardComponents.CalendarComponent,
    contacts: DashboardComponents.ContactsComponent,
    money: DashboardComponents.MonetizationComponent,
    faq: DashboardComponents.FaqComponent,
}
export default function DashboardContent() {
    const { showingComponents } = useDashboard();
    const countComponents: number = showingComponents.length;
    const heightPercent = 88 / countComponents ;
    
    return (
        <div className="h-full p-2 bg-slate-200 dark:bg-slate-700 border-t-2 border-slate-500 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-8">

            {showingComponents && showingComponents.map((key) => {
                const Component = componentMap[key as keyof typeof componentMap];
                return Component 
                ? 
                <div 
                    key={key} 
                    className={`w-fit ${key === 'calendar' ? 'col-span-1 row-span-1' : 'col-span-1 row-span-1'}`}
                    style={{
                        height: `${heightPercent}%`
                    }}
                >
                    <div className='w-full bg-slate-500 dark:bg-slate-400 min-h-full rounded-lg'>
                        <Component />
                    </div>
                </div> 
                : null;
            })}

            
        </div>
    )
}