"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-50 h-10 px-5 py-2.5 inline-flex rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600" />;
    }

    return (
        <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-5 py-2.5 inline-flex items-center gap-1.25 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 cursor-pointer"
        >
            {
                theme === "dark" ?
                    <Sun size={20} className="text-orange-500" /> :
                    <Moon size={20} className="text-purple-500" />
            }
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">Version 1.0 is live</span>
        </div>
    );
}