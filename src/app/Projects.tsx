'use client';

import React, { useState } from "react";
import { CircleArrowDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useScrollToId } from "./components/hooks/useScrollToId";
import Predict from "./components/Predict";

export default function Projects() {
    const [showingTitle, setShowingTitle] = useState<string>("");
    const [showingDetails, setShowingDetails] = useState<string>("");
    const [showingPredict, setShowingPredict] = useState(false);
    const scrollToId = useScrollToId();

    const showTitle = (value: string) => {
        if (value == "") return null;
        const element = document.getElementById(value);
        if (element) {
            element.classList.remove('hidden')
        setShowingTitle(value);
        }
    }

    const handleShowDetails = (value: string) => {
        if (value == "") return null;
        setShowingDetails(value);
        const element = document.getElementById('details_div');
        element?.classList.remove('h-0');
        setTimeout(() => {
            scrollToId('details_div');
        }, 300)
    }
    return (
        <div id="projects" className="scroll-mt-32 max-w-[90%] md:max-w-[1280px] flex flex-col items-center justify-center h-auto w-[95%] md:w-[80%] lg:max-w-[1024px] bg-white/40 dark:bg-black/60 rounded-lg pb-8">
            <h2 className="text-neutral-200 dark:text-white uppercase text-xl md:text-3xl my-4 tracking-widest">Projects and interests</h2>
            <div className="grid md:grid-cols-3 gap-4 w-full p-4 pb-8">
                <div id="project1"
                    className={`h-48 w-full bg-black/60 dark:bg-white/40 rounded-lg uppercase tracking-wider text-white font-bold cursor-pointer flex flex-col justify-between border-2 border-gray-700 hover:border-white ${showingDetails == 'project1' ? 'border-white' : ''}`}
                    style={{
                        backgroundImage: `url('create.jpg')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    onMouseEnter={() => showTitle('hover-title-1')}
                    onMouseLeave={() => {showTitle(""); setShowingTitle("");}}
                    onClick={() => {handleShowDetails('project1')}}
                >
                    <p className="bg-black/70 text-center p-2 text-md md:text-lg lg:text-xl min-h-18 flex justify-center items-center rounded-t-lg">Modern web development</p>
                    <div className="flex justify-center w-full ">
                        <h1 id='hover-title-1' className={`transition-all duration-300 ${showingTitle === 'hover-title-1' ? 'opacity-100' : 'opacity-0'}`}><CircleArrowDown size="42"/></h1>
                    </div>
                </div>
                <div id="project1" 
                    className={`h-48 w-full text-white bg-black/60 dark:bg-white/40 rounded-lg uppercase tracking-wider font-bold cursor-pointer flex flex-col justify-between border-2 border-gray-700 hover:border-white ${showingDetails == 'project2' ? 'border-white' : ''}`}
                    style={{
                        backgroundImage: `url('admin_image.png')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}    
                    onMouseEnter={() => showTitle('hover-title-2')}
                    onMouseLeave={() => {showTitle(""); setShowingTitle("");}}
                    onClick={() => {handleShowDetails('project2')}}
                >
                    <p className="bg-black/70 text-center p-2 text-md md:text-lg lg:text-xl min-h-18 flex justify-center items-center rounded-t-lg">Fullstack projects</p>
                    <div className="flex justify-center w-full ">
                        <h1 id='hover-title-2' className={`transition-all duration-300 ${showingTitle === 'hover-title-2' ? 'opacity-100' : 'opacity-0'}`}><CircleArrowDown size="42" color="black"/></h1>
                    </div>
                </div>
                <div id="project3" 
                    className={`h-48 w-full text-white bg-black/60 dark:bg-white/40 rounded-lg uppercase tracking-wider font-bold cursor-pointer flex flex-col justify-between border-2 border-gray-700 hover:border-white ${showingDetails == 'project3' ? 'border-white' : ''}`}
                    style={{
                        backgroundImage: `url('brain.jpg')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}    
                    onMouseEnter={() => showTitle('hover-title-3')}
                    onMouseLeave={() => {showTitle(""); setShowingTitle("");}} 
                    onClick={() => {handleShowDetails('project3')}}                   
                >
                    <p className="bg-black/70 text-center  p-2 text-md md:text-lg lg:text-xl min-h-18 flex justify-center items-center rounded-t-lg">ML and NLP</p>
                    <div className="flex justify-center w-full ">
                        <h1 id='hover-title-3' className={`transition-all duration-300 ${showingTitle === 'hover-title-3' ? 'opacity-100' : 'opacity-0'}`}><CircleArrowDown size="42"/></h1>
                    </div>                
                </div>
            </div>
            <div id="details_div" className="flex flex-col justify-start items-center max-w-full md:max-w-screen h-0 overflow-hidden transition-all duration-2000">
            {showingDetails !== "" && (
                <div className="w-[85%] md:w-[95%] h-auto px-4 bg-white/50 dark:bg-white/10 text:black dark:text-white py-4 pb-8 rounded-lg">
                    {showingDetails == 'project1' && (
                        <div>
                            <h2 className="text-xl md:text-2xl tracking-wide w-full text-center">Modern responsive web development with Next.js and TailwindCSS</h2>
                            {/* Create.no images */}
                            <div className="flex flex-col lg:flex-row w-full justify-center gap-4 mt-4 items-center ">
                                <h2 className="flex flex-col text-start  justify-center items-center">
                                    <p>Sample images from </p>
                                    <a href='http://www.create.no' target='_blank' className="m-2 inline-flex items-center justify-start">
                                        <span className="bg-fuchsia-700 hover:bg-fuchsia-600 p-2 border-1 rounded-lg m-3 text-sm text-white uppercase tracking-wider flex md:flex-col gap-2">
                                            <p>www.create.no</p> 
                                            <p className="w-full flex justify-center"><ExternalLink/></p>
                                        </span>
                                    </a>
                                </h2>
                                <div className="md:w-[360px] border-3 border-white/60 md:h-[300px] flex justify-center items-center bg-slate-800 rounded-2xl lg:hover:scale-110 md:active:scale-110 transition-all duration-300 overflow-hidden">
                                    <Image src='/create2.jpg' width={400} height={400} style={{objectFit: 'cover'}} alt="Modern wedbdev example 1"/>
                                </div>
                                <div className="w-[200px] border-2 border-white/60 lg:h-[300px] overflow-hidden transition-all duration-300 rounded-xl bg-white active:scale-110 hover:scale-110">
                                        <Image src='/create3.jpg' width={200} height={200} style={{objectFit: 'cover'}} alt="Modern wedbdev example 3"/>
                                </div>
                                <div className="w-[200px] border-2 border-white/60 lg:h-[300px] overflow-hidden transition-all duration-300 rounded-xl bg-white active:scale-110 hover:scale-110">
                                        <Image src='/create4.jpg' width={200} height={200} style={{objectFit: 'cover'}} alt="Modern wedbdev example 3"/>
                                </div>                                
                            </div>
                                                      
                            <p className="font-normal text-md md:text-lg tracking-wide mt-4 leading-8">I build fully responsive and scalable websites with Next.js, React, TypeScript and TailwindCSS. I am enthousiastic about neat designs and intuitive user experiences. </p>
                            <p className="font-normal text-md md:text-lg tracking-wide mt-4 leading-8">Take a look at &nbsp;
                                <span className="bg-black/70 px-2 py-1 rounded-lg hover:bg-black/20 transition-all duration-300"> 
                                    <a target="_blank" className="uppercase text-white hover:text-black transition-all duration-300 text-sm font-bold whitespace-nowrap inline-flex items-center" href="https://www.create.no">
                                        Create.no &nbsp;<ExternalLink size={14}/>
                                    </a>
                                </span>
                                &nbsp;or view the code on &nbsp;
                                <span className="bg-black/70 px-2 py-1 rounded-lg hover:bg-black/20 transition-all duration-300"> 
                                    <a target="_blank" className="uppercase text-white hover:text-black transition-all duration-300 text-sm font-bold whitespace-nowrap inline-flex items-center" href="https://github.com/jonasriv/Create-Highschool-Website-and-Administration-Portal">
                                        GitHub &nbsp;<ExternalLink size={14}/>
                                    </a>                                    
                                </span>
                            </p>
                        </div>
                    )}
                    {showingDetails == 'project2' && (
                        <div>
                            <h2 className="text-xl md:text-2xl tracking-wide w-full text-center">Fullstack web development</h2>
                            <div className="flex flex-col w-full justify-between gap-4 mt-4 items-center">
                                <p className="w-full font-normal text-md md:text-lg tracking-wide mt-4 leading-8">
                                    I create complete web solutions with admin portal and full costumizability. For frontend, i prefer Next / React in TypeScript with TailwindCSS, adding feats from ShadCN and other component libraries. For backend, i use Node.js / Express, PostgreSQL, MongoDB and FastAPI (Python). 
                                </p>
                            {/* Dashboard images */}
                            <div className="flex flex-col md:flex-row justify-between gap-4 lg:justify-around items-center mt-4">
                            <h2 className="flex flex-col text-start  justify-center items-center">
  
                                </h2>
                                <div className="w-fit border-2 border-white/60 overflow-hidden transition-all duration-300 rounded-xl  active:scale-110 hover:scale-110">
                                    <Image src='/dashboardImage.png' width={500} height={200} style={{objectFit: 'cover'}} alt="Modern wedbdev example 3"/>
                                </div>
                                <div className="w-fit border-2 border-white/60 overflow-hidden transition-all duration-300 rounded-xl  active:scale-110 hover:scale-110">
                                    <Image src='/dashboardImagePhone.png' width={150} height={200} style={{objectFit: 'cover'}} alt="Modern wedbdev example 3"/>
                                </div>                                
                            </div>  
                            </div>
                            <p className="font-normal text-md md:text-lg tracking-wide mt-8 leading-8">Please try out my &nbsp;
                                <span className="bg-black/70 px-2 py-1 rounded-lg hover:bg-black/20 hover:text-white transition-all duration-300"> 
                                    <a target="_blank" className="uppercase text-white hover:text-black dark:hover:text-white transition-all duration-300 text-sm font-bold whitespace-nowrap inline-flex items-center" href="/dashboard">
                                        Dashboard &nbsp;<ExternalLink size={14}/>
                                    </a>
                                </span>
                                &nbsp;or view the code on &nbsp;
                                <span className="bg-black/70 px-2 py-1 rounded-lg hover:bg-black/20 hover:text-white transition-all duration-300"> 
                                    <a target="_blank" className="uppercase text-white hover:text-black dark:hover:text-white transition-all duration-300 text-sm font-bold whitespace-nowrap inline-flex items-center" href="https://github.com/jonasriv/jriversen">
                                        GitHub &nbsp;<ExternalLink size={14}/>
                                    </a>                                    
                                </span>
                            </p>
                        </div>
                    )}
                    {showingDetails == 'project3' && (
                        <div>
                            <h2 className="text-xl md:text-2xl tracking-wide">Machine Learning and Natural Language Processing</h2>
                            <p className="tracking-wide leading-6 text-lg">I am enthousiastic about the opportunities that technologies such as Tensorflow.js create for progressive web development. I have experience in training neural network models and utilizing language technology in tasks such as text classification, sentiment analyses and more.  </p>
                            <h2 className="text-lg mt-4 mb-4">Click the button for a simple illustration using the classic COCO-SSD model with Tensorflow.js: </h2>
                            <div className="w-full flex justify-center items-start">
                                <button 
                                    className="bg-black/30 dark:bg-white/40 dark:text-black p-2 min-w-72 rounded-xl uppercase text-white hover:text-black transition-all duration-300 text-sm font-bold whitespace-nowrap items-center"
                                    onClick={() => setShowingPredict(!showingPredict)}    
                                >
                                    {!showingPredict ? <span>Open camera and detect objects</span> : <span>Close camera</span>}
                                </button>
                            </div>
                            {showingPredict && <span><p>Prediction: </p><Predict/></span>}
                        </div>
                    )}      
                    <div className="w-full flex justify-center items-center pt-4">
                        <button className="bg-black/40 dark:bg-white/50 text-white dark:text-black w-96 opacity-80 p-2 rounded-xl mt-4 cursor-pointer hover:bg-white/70 hover:text-black transition-all duration-300 tracking-widest" onClick={() => {setShowingDetails("")}}>back</button>
                    </div>
                    
                </div>
            )}
            </div>
            
        </div>
    )
}