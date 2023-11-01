import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

    return (
        <div className='text-slate-200'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-orange-400 font-bold p-2'>
                    Welcome to my portfolio
                </p>
                <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    My name is VL
                </p>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                        <TypeAnimation 
                        sequence={[
                            'UI/UX Desinger',
                            1000,
                            'FrontEnd Developer',
                            1000,
                            'Artist',
                            1000
                        ]}
                        wrapper='span'
                        speed={60}
                        repeat={Infinity}
                        />
                    </p>
                </div>

                <button className='bg-orange-400 text-slate-200 w-[200px] rounded-md mx-auto px-6 py-3 mt-5'>
                    Get Started
                </button>
            </div>
        </div>
    )
};


export default Hero;