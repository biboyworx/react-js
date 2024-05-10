import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const activeClass = 'rounded-md bg-white text-white p-2';

    const NavLinkFunction = () => {
        const sideBarArray = new Map([
          ['Dashboard', '/dashboard'],
          ['Admin', '/admin'],
          ['Students', '/students'],
        ]);
        
  
        return (
            <ul>
                {[...sideBarArray].map(([key, value]) => (
                    <li key={value} className="mb-2">
                        <NavLink
                            exact= "true"
                            to={value}
                            className={`block text-sm font-medium hover:text-black focus:outline-none focus:text-black ${location.pathname === value ? activeClass : ''}`}
                            activeClassName={activeClass}
                        >
                            {key}
                        </NavLink>
                    </li>
                ))}
            </ul>
        );
    }
     
    return (
        <aside className="bg-cyan-900 w-64 h-full flex flex-col justify-between">
            <div className="px-4 py-8">
                {NavLinkFunction()}
            </div>
            <div className="px-4 py-4 text-white text-sm text-center">LeZunshayn™</div>
        </aside>
    );
}
  
export default Sidebar;