'use client';


import { useEffect } from "react";

type Question = {
    question: string,
    answer: string
}

interface GetAllQuestionsInterface{
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>
}

export default function useGetAllQuestions({ setQuestions }: GetAllQuestionsInterface ) {
    useEffect(()=> {
        const fetchQuestions = async () => {
            try {
                const result = await fetch('/faq.json');
                if (!result.ok) throw new Error("Could not get questions");
                const data = await result.json();
                setQuestions(data);
            } catch (err) {
                console.error("Could not get questions", err);
            }
        }

        fetchQuestions();
    }, [setQuestions])

    return(
        <div>

        </div>
    )
}