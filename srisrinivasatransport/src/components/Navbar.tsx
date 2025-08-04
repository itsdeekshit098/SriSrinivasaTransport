"use client"; // Only needed if you're using App Router in Next.js

import React, { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-blue-700">
          <a href="#">Sri Srinivasa Transport</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link href="/navBarComponents/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link href="/navBarComponents/documents" style={{ marginRight: '1rem' }}>Documents</Link>
          <Link  href="/navBarComponents/contact" style={{marginRight: '1rem'}}>Contact</Link>
          <Button>
            Login
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-700" onClick={()=>setIsOpen(false)}>Home</Link>
          <Link href="/navBarComponents/about" className="block text-gray-700 hover:text-blue-700" onClick={()=>setIsOpen(false)}>About</Link>
          <Link href="/navBarComponents/documents" className="block text-gray-700 hover:text-blue-700" onClick={()=>setIsOpen(false)}>Documents</Link>
          <a href="/navBar/contact" className="block text-gray-700 hover:text-blue-700" onClick={()=>setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
