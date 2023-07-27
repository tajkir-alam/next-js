'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import navStyle from '@/styles/navbar.module.css';
import Image from 'next/legacy/image';
import { FaUserAlt } from "react-icons/fa";
import { usePathname, useRouter } from 'next/navigation';
import { AuthContext } from '@/Provider/AuthProvider';

const Nav = () => {
    const { logOut, user } = useContext(AuthContext);

    const pathname = usePathname();
    const router = useRouter();

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
            name: "Contact",
            href: "/contact",
        },
    ]

    const navBar = navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)

        return (
            <li
                key={link.name}
                className={`${isActive ? 'bg-[#166BFF]' : 'bg-[#319DFF]'} text-white hover:text-white rounded-3xl hover:bg-[#166BFF]`}>
                <Link href={link.href} as={link.href}
                    className={`${isActive ? 'bg-[#166BFF]' : 'bg-[#319DFF]'} text-white hover:text-white rounded-3xl hover:bg-[#166BFF]`}>
                    {link.name}
                </Link>
            </li>
        )
    })

    return (
        <header className='pt-10'>
            <nav className={`navbar ${navStyle.nav} px-10`}>
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
                    <Link href='/' as={'/'}>
                        <div className='w-28 h-10 relative'>
                            <Image
                                src="/logo.png"
                                alt="Uniech Logo"
                                layout='fill'
                                sizes='100'
                                priority={true}
                            />
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-white menu menu-horizontal px-1 uppercase gap-8">
                        {
                            navBar
                        }
                    </ul>
                </div>
                <div className="navbar-end text-[#166BFF] gap-2">
                    <span><FaUserAlt className='text-2xl' /></span>
                    {!user ?
                        <button onClick={() => router.push('/login')} className='font-semibold'>SIGN IN</button>
                        :
                        <button onClick={() => logOut()} className='font-semibold'>SIGN OUT</button>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Nav;