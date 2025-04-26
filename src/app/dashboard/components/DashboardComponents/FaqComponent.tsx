'use client';
import { useState, useEffect } from "react";
import useGetAllQuestions from "../../functions/useGetAllQuestions";
import { CircleHelp, CircleArrowDown, CircleArrowUp } from "lucide-react";
type Question = {
    question: string,
    answer: string
}

export default function FaqComponent() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
    const [showingDetails, setShowingDetails] = useState<Question | null>(null);

    useGetAllQuestions({ setQuestions });

    const filterQuestions = (filterText: string) => {
        if (filterText == "") setFilteredQuestions(questions);
        const newQuestions = questions.filter((question) => question.answer.includes(filterText) || question.question.includes(filterText));
        setFilteredQuestions(newQuestions);
    }

    useEffect(() => {
        setFilteredQuestions(questions);
    }, [questions])


    return(
        <div className="flex flex-col p-2 justify-start items-start h-90 overflow-y-scroll border-2 border-slate-600 rounded-lg bg-slate-500 dark:bg-slate-300 dark:border-slate-300">
            <h2 className="inline-flex items-center text-slate-300 dark:text-slate-800 text-md uppercase tracking-wider justify-between w-full p-2"><CircleHelp/>Frequently asked questions</h2>
            <input 
                type="text"
                about="search filter"
                placeholder="Search FAQ"
                onChange={(e) => {filterQuestions(e.target.value)}}
                className="w-full bg-white rounded-lg p-2 mb-4 text-black dark:text-black"
            />
            <div className="w-full flex flex-col gap-1 mt-2"> 
                {filteredQuestions.map((question, index) => (
                    <div key={index} className={`w-full px-2 py-2 text-black ${index % 2 === 0 ? 'bg-slate-500 text-white' : 'bg-slate-400'}`}>
                        <span 
                            className="inline-flex items-center justify-between px-2 w-full cursor-pointer"
                            onClick={() => {
                                if(showingDetails && showingDetails.answer === question.answer) {
                                    setShowingDetails(null);
                                } else {
                                    setShowingDetails(question)
                                }
                                }
                            }
                        >
                            {question.question}
                            {showingDetails ? showingDetails.answer === question.answer ? <CircleArrowUp/> : <CircleArrowUp/> : <CircleArrowDown/> }
                        </span>
                        <div className={`p-2 rounded-md mx-2 mt-2 ${index % 2 === 0 ? 'bg-slate-400' : 'bg-slate-300'} ${showingDetails?.answer === question.answer ? 'opacity-100 h-auto' : 'opacity-0 max-h-0'}`}>
                            {question.answer}
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    )
}