'use client';
import { useState, useEffect } from 'react';
import { Contact } from '../../types/contact';
import { SquareUser, Mail, Phone, User, CircleChevronDown, CircleChevronUp } from 'lucide-react';
import useGetAllContacts from "../../functions/useGetAllContacts";

export default function ContactsComponent() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
    const [filterText, setFilterText] = useState<string>("");
    const [showingDetails, setShowingDetails] = useState<Contact | null>(null);

    const setShowDetails = (phoneNumber: string) => {
        if (phoneNumber === "") {
            setShowingDetails(null);
            return;
        }
        const detailContacts: Contact[] = contacts.filter((contact) => contact.phone === phoneNumber);
        setShowingDetails(detailContacts[0]);
    }

    useGetAllContacts({ setContacts });
    
    useEffect(() => {
        const filtered = contacts.filter((contact)  => contact.name.includes(filterText) || contact.email.includes(filterText) || contact.phone.includes(filterText));
        setFilteredContacts(filtered);
        
    }, [filterText, contacts]);
    
    return(
        <div className='bg-slate-500 dark:bg-slate-300 p-2 rounded-lg h-[500px] md:h-90 overflow-y-scroll border-slate-600 border-2'>
            <h2 className='bg-transparent inline-flex text-lg uppercase tracking-wider gap-4 justify-between w-full p-2 text-white dark:text-slate-800'><SquareUser/>Contacts</h2>
            <div id="searchbar" className='h-12 flex items-center w-full justify-center pb-4'>
                <input  
                    type="text"
                    name="search_input"
                    value={filterText}
                    className='w-full rounded-lg h-8 bg-slate-200 p-2 text-black mt-4'
                    placeholder="Search contacts"
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </div>
            <ul className='h-full overflow-scroll bg-transparent border-t-1 border-white pt-2'>
            {filteredContacts.map((contact, index) => (
                <li key={index} 
                    className={`w-full flex flex-col justify-start items-start gap-2 pt-2 pb-2 ${index % 2 === 0 ? 'bg-slate-400/10' : 'bg-slate-400/50'}`}
                    onClick={() => {setShowDetails(contact.phone)}}
                >
                    <p className='inline-flex px-2 items-center gap-2 text-slate-200 dark:text-slate-950 justify-between w-full'>
                        <span className='inline-flex items-center gap-2'>
                            <User color='blue' size={14}/> 
                            {contact.name}
                        </span>
                        {showingDetails && showingDetails.phone === contact.phone ? <span onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setShowDetails("");
                                                                    }}>
                                                                        <CircleChevronUp size='18'/></span> : <CircleChevronDown size='18'/>}
                    </p>
                    <span className={`transition-all duration-300 flex flex-col gap-2 overflow-hidden ${showingDetails ? contact.phone === showingDetails.phone ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' : 'max-h-0 opacity-0'}`}>
                        <p className='inline-flex px-2 items-center gap-2 text-slate-300 dark:text-slate-800'><Mail color='darkgreen' size={14}/> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                        <p className='inline-flex px-2 items-center gap-2 text-slate-300 dark:text-slate-800'><Phone color='purple' size={14}/> <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                    </span>
                </li> 
            ))}
            </ul>
        </div>
    )
}