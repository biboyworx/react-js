import React from 'react';

function Header() {
  return (
    <header className="bg-cyan-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LeZunshayn University</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/dashboard" className="hover:text-gray-300 text-white">Dashboard</a>
            </li>
            <li>
              <a href="/students" className="hover:text-gray-300 text-white">Students</a>
            </li>
            <li>
              <a href="/admin" className="hover:text-gray-300 text-white">Admin</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;