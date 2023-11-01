import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    } 

    return (
        <div className='text-slate- flex justify-between items-center h-24 px-3 max-w-[1240px] mx-auto'>
            <h1 className='w-full text-3xl font-bold text-orange-400 z-10'>REACT.</h1>
            <ul className='md:flex md:gap-4 hidden text-slate-200'>
                <li>Home</li>
                <li>About</li>
                <li>Resources</li>
                <li>Servces</li>
                <li>Contact</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'> 
                {!nav ? <AiOutlineClose className='text-slate-200' size={20} /> : <AiOutlineMenu className='text-slate-200' size={20} />}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500' : 'fixed top-[-100%]'}>
                <ul className='pt-24 uppercase grid gap-4 text-slate-200 z-0 p-4'>
                    <li className='border-b border-b-gray-600'>Home</li>
                    <li className='border-b border-b-gray-600'>About</li>
                    <li className='border-b border-b-gray-600'>Resources</li>
                    <li className='border-b border-b-gray-600'>Servces</li>
                    <li className='border-b border-b-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar