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
      className='relative bg-slate-700 text-black dark:text-white min-h-screen flex flex-col items-center no-scrollbar pb-32'
      style={{
        backgroundImage: `url('/P5141283 Flying solo.jpg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      
      }}
    >
      <Header/>
      <div 
        id="main-content" className="w-full max-w-screen h-full flex flex-col gap-12 justify-start items-center text-black mt-8 md:mt-24 pb-12 no-scrollbar"
        
      >
        <About/>
        <Projects/>
        <Contact/>
      </div>
      
    </div>
  )
}