"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore'

export default function HomeLinks() {
    const { user, isLoading } = useAuthStore()

    if (isLoading) {
        return <div className="w-full sm:w-56 px-10 py-7 mx-auto sm:text-lg font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 shadow-lg transition-all text-center" />;
    }

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            {
                user ?
                    <Link
                        href="/dashboard"
                        className="w-full sm:w-56 px-10 py-3.5 flex items-center justify-center gap-2.5 sm:text-lg font-bold bg-linear-to-r from-purple-600 to-orange-600 text-white rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-purple-500/25 transform transition-all hover:-translate-y-0.5 active:scale-95 text-center"
                    >
                        Dashboard <ChevronRight size={25} />
                    </Link> :
                    <>
                        <Link
                            href="/signin"
                            className="w-full sm:w-56 px-10 py-3.5 sm:text-lg font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 shadow-lg transition-all text-center"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="w-full sm:w-56 px-10 py-3.5 flex items-center justify-center gap-2.5 sm:text-lg font-bold bg-linear-to-r from-purple-600 to-orange-600 text-white rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-purple-500/25 transform transition-all hover:-translate-y-0.5 active:scale-95 text-center"
                        >
                            Get Started <ChevronRight size={25} />
                        </Link>
                    </>
            }
        </div>
    )
}