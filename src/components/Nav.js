'use client';
import Link from 'next/link';
import React from 'react';
import navStyle from '@/styles/navbar.module.css'
import Image from 'next/image';
// import Image from 'next/legacy/image';
import { FaUserAlt } from "react-icons/fa";
import { usePathname } from 'next/navigation'

const Nav = () => {
    const pathname = usePathname()

    const navBar = <>
        <li className='rounded-full p-1 lg:py-0 lg:px-2'>
            <Link href={'/home'} className='bg-[#319DFF] hover:bg-[#166BFF] hover:text-white'>
                Home
            </Link>
        </li>
        <li className='rounded-full p-1 lg:py-0 lg:px-2'>
            <Link href={'/services'} className='bg-[#319DFF] hover:bg-[#166BFF] hover:text-white'>
                services
            </Link>
        </li>
        <li className='rounded-full p-1 lg:py-0 lg:px-2'>
            <Link href={'/blog'} className='bg-[#319DFF] hover:bg-[#166BFF] hover:text-white'>
                blog
            </Link>
        </li>
        <li className='rounded-full p-1 lg:py-0 lg:px-2'>
            <Link href={'/about'} className='bg-[#319DFF] hover:bg-[#166BFF] hover:text-white'>
                About US
            </Link>
        </li>
        <li className='rounded-full p-1 lg:py-0 lg:px-2'>
            <Link href={'/contact'} className='bg-[#319DFF] hover:bg-[#166BFF] hover:text-white'>
                Contact
            </Link>
        </li>
    </>

    const navLinks = [
        {
            name: "Home",
            href: "/home",
        },
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "About Us",
            href: "/about",
        },
        {
            name: "Contacts",
            href: "/contacts",
        },
    ]

    return (
        <header className='pt-12'>
            <nav className={`navbar bg-base-100 ${navStyle.nav} px-10`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-white gap-2">
                            {
                                navBar
                            }
                        </ul>
                    </div>
                    <Link href='/'>
                        <div className='w-28 h-10 relative'>
                            <Image
                                src="/logo.png"
                                alt="Uniech Logo"
                                // width={100}
                                // height={0}
                                layout='fill'
                                sizes='100'
                                priority={true}
                            />
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase gap-3 text-white">
                        {navLinks.map((link) => {
                            const isActive = pathname.startsWith(link.href)

                            return (
                                <li key={link.name} className='rounded-full p-1 lg:py-0 lg:px-2'>
                                    <Link href={link.href}
                                        className={`${isActive ? 'bg-[#166BFF]' : 'bg-[#319DFF]'} hover:bg-[#166BFF] hover:text-white`}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="navbar-end text-[#166BFF] gap-2">
                    <span><FaUserAlt className='text-2xl' /></span>
                    <Link href={'signin'} className='font-semibold'>SIGN IN</Link>
                </div>
            </nav>


            {/* Section for banner To DO  */}
        </header>
    );
};

export default Nav;