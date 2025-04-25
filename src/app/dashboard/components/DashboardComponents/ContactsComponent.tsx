'use client';
import { useState, useEffect } from 'react';
import { Contact } from '../../types/contact';
import { SquareUser, Mail, Phone, User } from 'lucide-react';
import useGetAllContacts from "../../functions/useGetAllContacts";

export default function ContactsComponent() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
    const [filterText, setFilterText] = useState<string>("");
    
    useGetAllContacts({ setContacts });
    
    useEffect(() => {
        const filtered = contacts.filter((contact)  => contact.name.includes(filterText) || contact.email.includes(filterText) || contact.phone.includes(filterText));
        setFilteredContacts(filtered);
        
    }, [filterText, contacts]);
    
    return(
        <div className='bg-transparent'>
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
            <ul className='max-h-48 overflow-scroll bg-transparent border-t-1 border-white pt-2'>
            {filteredContacts.map((contact, index) => (
                <li key={index} className='border-b-1 border-orange-400 flex flex-col justify-start items-start gap-2 pt-2 pb-2'>
                    <p className='inline-flex px-2 items-center gap-2 underline'><User color='blue' size={14}/> {contact.name}</p>
                    <p className='inline-flex px-2 items-center gap-2'><Mail color='darkgreen' size={14}/> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                    <p className='inline-flex px-2 items-center gap-2'><Phone color='purple' size={14}/> <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                </li> 
            ))}
            </ul>
        </div>
    )
}