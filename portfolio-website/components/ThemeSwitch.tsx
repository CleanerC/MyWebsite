"use client"
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = storedTheme || systemTheme
    
    setTheme(initialTheme)
    if (initialTheme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    }
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const html = document.querySelector('html')
    if (theme === 'light') {
      html?.classList.add('dark')
      html?.classList.remove('light')
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html?.classList.remove('dark')
      html?.classList.add('light')
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: 'var(--background)',
        border: '1px solid var(--foreground)',
      }}
      className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <div className={`absolute transition-all duration-300 ${
          theme === 'light' 
            ? 'rotate-0 opacity-100' 
            : '-rotate-90 opacity-0'
        }`}>
          <Moon className="w-6 h-6 text-blue-500"/>
          
        </div>
        <div className={`absolute transition-all duration-300 ${
          theme === 'dark'
            ? 'rotate-0 opacity-100'
            : 'rotate-90 opacity-0'
        }`}>
          <Sun className="w-6 h-6 text-yellow-500"/>
        </div>
      </div>
    </button>
  )
}