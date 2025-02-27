import React from 'react';

export function NavBar() {

    return (
        <div className="navbar bg-base-100 shadow-lg shadow-black rounded-lg z-10">
        <div className="navbar-start">
            <div className="dropdown z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
                <li><a>About</a></li>
                <li>
                <a>Projects</a>
                <ul className="p-2">
                    <li><a>NC News</a></li>
                    <li><a>Gamerly</a></li>
                </ul>
                </li>
                <li><a>Contact</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-3xl">Melissa.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
            <li><a>About</a></li>
            <li>
                <details>
                <summary>Projects</summary>
                <ul className="p-2 z-[1]">
                    <li><a>NC News</a></li>
                    <li><a>Gamerly</a></li>
                </ul>
                </details>
            </li>
            <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn text-3xl">CV</a>
        </div>
        </div>
    )
}