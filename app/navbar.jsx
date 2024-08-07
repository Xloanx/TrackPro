'use client'
import Link from 'next/link';
import React, {useState, useContext} from 'react';
import { useIssues } from '@/context/IssuesContext';
import { FaBugs } from "react-icons/fa6";

const Navbar = () => {

    
    const { filteredData, searchValue, setSearchValue } = useIssues();
    
    const links = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Issues', href: '/issues' },
        { label: 'Projects', href: '/projects' },
    ];

    const handleSearchChange = (event) => {
    const inputSearchvalue = event.target.value;
    setSearchValue(inputSearchvalue);
    
    };


  return (
    <nav>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn  lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52">
                {links.map(link => (
                    <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
                ))}
            </ul>
            </div>
            <a className="btn btn-ghost text-xl"> <FaBugs /> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {links.map(link => (
                    <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
                ))}
                
            </ul>
        </div>
        <div className="navbar-end">
            <div className="form-control">
                <input type="text" 
                        placeholder="Search" 
                        className="input input-bordered w-24 md:w-auto" 
                        value={searchValue}
                        onChange={handleSearchChange}/>
            </div>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar