'use client';
import { useEffect } from 'react';
import { Contact } from '../types/contact';

interface UseGetAllContactsProps {
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

export default function useGetAllContacts({ setContacts }: UseGetAllContactsProps ) {
    useEffect(() => {
        const fetchAllContacts = async () => {
            try {
                const result = await fetch('/contacts.json');
                if (!result.ok) throw new Error('Contacts could not be got!');

                const data = await result.json();
                setContacts(data);
            } catch (err) {
                console.error("Could not get contacts from file", err);
            }
        }

        fetchAllContacts();
    }, [setContacts]);
}