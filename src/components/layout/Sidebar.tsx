'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, LayoutDashboard, Settings, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SidebarItem from '../ui/SidebarItem';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean | null>(null)

    useEffect(() => {
        const saved = localStorage.getItem('sidebar-open')
        setIsOpen(saved === null ? true : saved === 'true')
    }, [])

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        localStorage.setItem('sidebar-open', String(!isOpen))
    }

    return ( 
        <motion.aside
            initial={false}
            animate={{ width: isOpen === null ? 275 : (isOpen ? 275 : 75) }}
            transition={{ duration: 0.25, ease: "linear" }}
            className="h-screen flex flex-col bg-white dark:bg-[#0f172a] border-r border-slate-200 dark:border-slate-800 shadow-xl"
        >
            {/* Header */}
            <div className={cn(
                "px-2.5 py-3.5 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 relative",
                isOpen ? "justify-between" : "justify-center"
            )}>
                <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-linear-to-br from-purple-600 to-orange-600 text-white font-bold rounded-lg shadow-lg">
                        SD
                    </div>
                    {isOpen && <span className="font-bold text-lg lg:text-2xl text-slate-800 dark:text-white whitespace-nowrap">Secure Dash</span>}
                </div>
                <button
                    onClick={toggleSidebar}
                    className={cn(
                        "p-1.5 text-slate-500 bg-white dark:bg-[#0f172a] hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all rounded-lg cursor-pointer",
                        !isOpen && "absolute bottom-4 -right-6 z-50"
                    )}
                >
                    {isOpen ? <ChevronLeft size={25} /> : <ChevronRight size={25} />}
                </button>
            </div>
            {/* Navigation */}
            <nav className="px-2.5 flex flex-col gap-1.25 mt-5">
                <SidebarItem icon={<Home size={20} />} label="Home" href="/" isOpen={isOpen ?? true} />
                <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" href="/dashboard" isOpen={isOpen ?? true} />
                <SidebarItem icon={<Settings size={20} />} label="Settings" href="/dashboard/settings" isOpen={isOpen ?? true} />
                <SidebarItem icon={<User size={20} />} label="Profile" href="/dashboard/profile" isOpen={isOpen ?? true} />
            </nav>
        </motion.aside>
    )
}