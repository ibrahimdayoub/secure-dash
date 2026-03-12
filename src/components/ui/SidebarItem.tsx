'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
    icon: ReactNode
    label: string
    href: string
    isOpen: boolean
}

export default function SidebarItem({ icon, label, href, isOpen }: SidebarItemProps) {
    const pathname = usePathname();

    const isActive = href === '/' ? pathname === '/' : pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "p-2.5 flex items-center gap-2.5 rounded-lg transition-all group",
                isOpen ? "justify-start" : "justify-center",
                isActive
                    ? "bg-slate-500/10 text-slate-800 dark:text-slate-200 font-medium"
                    : "hover:bg-slate-500/10 text-slate-500 hover:text-slate-800 hover:dark:text-slate-200"
            )}
        >
            <div
                className={cn(
                    "shrink-0 transition-all",
                    isActive && "text-orange-600 dark:text-purple-600",
                    !isActive && "text-slate-500",
                    "group-hover:text-orange-600 dark:group-hover:text-purple-600"
                )}
            >
                {icon}
            </div>
            {isOpen && <span className="truncate">{label}</span>}
        </Link>
    )
}