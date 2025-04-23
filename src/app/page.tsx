'use client'

import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <div 
      id='page-top'
      className='bg-slate-700 text-black dark:text-white min-h-screen flex flex-col justify-start items-center no-scrollbar overflow-x-hidden overflow-y-hidden'
      style={{
        backgroundImage: `url('/P5141283 Flying solo.jpg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      
      }}
    >
      <Header/>
      <div 
        id="main-content" className="w-full max-w-1024 h-auto min-h-200 flex flex-col justify-start items-center text-black mt-8 md:mt-24 pt-8 gap-8 overflow-y-scroll pb-12 no-scrollbar"
        
      >
        <About/>
        <Projects/>
        <Contact/>
      </div>
      
    </div>
  )
}