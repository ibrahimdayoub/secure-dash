'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, LogOut, User } from 'lucide-react';
import { logout } from '@/actions/auth';
import { useAuthStore } from '@/store/useAuthStore';
import LogoutModal from '../ui/LogoutModal';

export default function Navbar() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const { user, isLoading } = useAuthStore()

    const [mounted, setMounted] = useState(false)
    const [isModalOpen, setIsLogoutOpen] = useState(false)

    const getPageTitle = () => {
        const lastSegment = pathname.split('/').filter(Boolean).pop();
        if (!lastSegment || lastSegment === 'dashboard') {
            return 'Dashboard Overview';
        }
        const formattedTitle = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
        return `${formattedTitle} Overview`;
    };

    const handleLogout = async () => {
        await logout()
        setIsLogoutOpen(false)
    }

    useEffect(() => setMounted(true), [])

    return (
        <header className="px-7.5 py-3.5 flex items-center justify-end lg:justify-between bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800">
            <h2 className="hidden lg:block font-bold text-base lg:text-lg text-slate-800 dark:text-white">{getPageTitle()}</h2>
            <div className="flex items-center gap-2.5">
                {mounted && (
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2.5 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all group cursor-pointer"
                    >
                        {theme === 'dark' ?
                            <Sun size={20} className="text-orange-500 group-hover:rotate-45 transition-transform" /> :
                            <Moon size={20} className="text-purple-500 group-hover:rotate-0 transition-transform" />
                        }
                    </button>
                )}
                {user && (
                    <Link
                        href="/dashboard/profile"
                        className="px-2.5 py-2.5 flex items-center gap-1.5 text-sm font-medium bg-slate-500/10 text-slate-800 dark:text-slate-200 rounded-lg"
                    >
                        <User size={20} className="text-orange-600 dark:text-purple-600" />
                        {isLoading ? "" : user.name}
                    </Link>
                )}
                <button
                    onClick={() => setIsLogoutOpen(true)}
                    className="p-2.5 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all cursor-pointer"
                >
                    <LogOut size={20} />
                </button>
            </div>
            {
                isModalOpen &&
                <LogoutModal
                    isOpen={isModalOpen}
                    onClose={() => setIsLogoutOpen(false)}
                    onConfirm={handleLogout}
                />
            }
        </header>
    )
}