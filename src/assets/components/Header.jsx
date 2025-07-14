import React from 'react'

import { Menu, X } from 'lucide-react';

function Header({ isOpen, toggle }) {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
      <button onClick={toggle}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <div className="text-lg font-bold">Dashboard</div>
    </header>
  );
}

export default Header;