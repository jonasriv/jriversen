'use client'

import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    // Home.jsx
<div
  id='page-top'
  className='relative bg-slate-700 text-black dark:text-white min-h-screen w-full min-w-full max-w-screen no-scrollbar overflow-x-hidden'
  style={{
    backgroundImage: `url('/P5141283 Flying solo.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }}
>
  {/* Header med sticky */}
  <Header />

  {/* Innholdet */}
  <div 
    id="main-content"
    className="w-full flex flex-col gap-12 justify-start items-center mt-8 md:mt-24 pb-32"
  >
    <About/>
    <Projects/>
    <Contact/>
  </div>
    <Footer/>
</div>

  )
}