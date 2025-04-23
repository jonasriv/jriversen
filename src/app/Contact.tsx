'use client';
import { IdCard, Mail, House, PersonStanding, Linkedin, Twitter} from 'lucide-react';
export default function Contact() {
    return (
<div className="flex flex-col items-center justify-center h-auto w-[95%] md:w-[80%] bg-white/40 dark:bg-black/60 rounded-lg pb-12">
            <h1 className="text-black dark:text-white">Contact</h1>
            <div id="contact" className="flex flex-col md:grid grid-cols-2 gap-4 w-full p-4 pb-8">
                <div 
                    className="h-auto md:h-42 w-full p-2 bg-black/60 dark:bg-white/40 rounded-lg tracking-wider text-white text-shadow-black"
                >
                    <h2 className="text-lg uppercase inline-flex gap-2 items-center border-b-2 w-full"><IdCard size={22}/>Contact info:</h2>
                    <ul className="tracking-wide font-light leading-6 mt-2 flex flex-col gap-3">
                        <li className='inline-flex items-center gap-4 text-sm'><PersonStanding size={14} color="white"/>Jonas Risløw Iversen</li>
                        <li className='inline-flex items-center gap-4 text-sm'><Mail size={14} color="white"/><a href="mailto:jonasriv@gmail.com">jonasriv@gmail.com</a></li>
                        <li className='inline-flex items-center gap-4 text-sm'><House size={14} color="white"/><a target="_blank" href="http://www.jriversen.com">www.jriversen.com</a></li>
                    </ul>
                </div>
                <div 
                    className="h-auto md:h-42 w-full p-2 bg-black/60 dark:bg-white/40 rounded-lg tracking-wider text-white text-shadow-black"
                >
                    <h2 className="text-lg uppercase inline-flex gap-2 items-center border-b-2 w-full"><IdCard size={22}/>Social:</h2>
                    <ul className="tracking-wide font-light leading-6 mt-2 flex flex-col gap-4">
                        <li className='inline-flex items-center gap-4 text-sm'><Linkedin size={14} color="white"/><a target="_blank" href="www.linkedin.com/in/jonas-risløw-iversen-3b593a57">linkedIn</a></li>
                        <li className='inline-flex items-center gap-4 text-sm'><Twitter size={14} color="white"/><a target="_blank" href="https://x.com/jonasriv">@jonasriv</a></li>
                        
                    </ul>
                </div>

            </div>
        </div>
    )
}