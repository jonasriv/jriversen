'use client';
import Image from 'next/image';
import { CircleSmall } from 'lucide-react';

export default function About () {

    return (
        <div id="about" className="scroll-mt-32 max-w-[90%] md:max-w-[1280px] flex flex-col md:flex-row items-center justify-center gap-12 w-full h-auto">
            <div className='bg-white/40 dark:bg-black/60 text-black dark:text-white w-[100%] md:w-[80%] rounded-xl mx-4 p-4 flex flex-col md:flex-row h-auto'>
                <article className='gap-4 w-full'>
                    <h2 className='text-black dark:text-white uppercase text-xl md:text-3xl my-4 tracking-widest text-center'>Jonas Risløw Iversen</h2>
                    <div className='w-full flex flex-row md:flex-row justify-center items-start gap-4'>
                        <p className="text-lg max-w-[800px] tracking-wide">
                            I am a dedicated fullstack developer within modern web development, with Next / React / TypeScript / TailwindCSS as my primary stack. In addition, I am trained in machine learning technologies and neural networks. I am currently exploring ways to incorporate modern web development with various ML technologies such as Tensorflow.js
                        </p>
                    </div>
                    
                    <div className='flex flex-row max-w-screen justify-around items-start gap-4 mt-8 min-h-76'>
                        <div className='bg-white/40 rounded-lg h-62 md:h-48 flex flex-col justify-start items-start md:items-center px-2 py-2'>
                        <h2 className='hidden md:block text-start text-lg tracking-widest mb-4 mt-2 uppercase text-fuchsia-950'>Primary tools:</h2>
                            <div className='flex flex-col md:flex-row w-auto md:justify-start items-start gap-4 text-black dark:text-white'>
                                <ul className='flex flex-col w-full leading-6 md:leading-8'>
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>Next.js</li>
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>React</li>
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>TailwindCSS</li>  
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>TypeScript</li>
    
                                </ul>
                                <ul className='flex flex-col w-full leading-6 md:leading-8'>
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>Node</li>
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>Express</li>
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>ScikitLearn</li>
                                    <li className='inline-flex items-center px-4'><CircleSmall size={16}/>TensorFlow</li>
                                </ul>    
                            </div>                       
                        </div>
                        <div className='bg-white/40 h-62 md:h-48 rounded-lg flex flex-col justify-start p-2 items-start'>
                            <Image
                                src='/portrait.jpg'
                                width={200}
                                height={200}
                                alt="Programmer in black and white."
                                className="rounded-lg"
                                style={{objectFit: 'cover'}}
                            />
                            <p className='italic text-sm mt-6'>Programmer in black and white</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}