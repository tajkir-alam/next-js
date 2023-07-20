import Link from 'next/link';
import React from 'react';
import navStyle from '@/styles/navbar.module.css'
import Image from 'next/image';

const Nav = () => {
    const navBar = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/services'}>services</Link></li>
        <li><Link href={'/blog'}>blog</Link></li>
        <li><Link href={'/about'}>About US</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
    </>

    return (
        <header className='custom-container'>
            <nav className={`navbar bg-base-100 ${navStyle.nav} px-10`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                            {
                                navBar
                            }
                        </ul>
                    </div>
                    <Link href='/'>
                        <Image
                            src="/logo.png"
                            alt="Uniech Logo"
                            width={100}
                            height={0}
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        {
                            navBar
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </nav>


            {/* Section for banner To DO  */}
        </header>
    );
};

export default Nav;