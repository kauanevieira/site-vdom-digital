// src/components/Header.tsx
"use client"

import { useState } from "react"
import { Menu, X, Home, Info, Github } from "lucide-react"
import { Button } from "@components/ui/button"
import Link from "next/link"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          VDom<span className="text-blue-600">Digital</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
            <Home size={16} /> Início
          </Link>
          <Link href="/about" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
            <Info size={16} /> Sobre
          </Link>
          <Link href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
            <Github size={16} /> GitHub
          </Link>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex">
          <Button>Entrar</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-gray-900">
          <nav className="flex flex-col p-4 space-y-3">
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              <Home size={18} /> Início
            </Link>
            <Link href="/about" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              <Info size={18} /> Sobre
            </Link>
            <Link href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              <Github size={18} /> GitHub
            </Link>
            <Button className="w-full">Entrar</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
