'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from '@/store/useAuthStore';
import { getCurrentUser } from '@/actions/user';

function AuthProvider({ children }: { children: React.ReactNode }) {
    const { user, setUser, setIsLoading } = useAuthStore()

    useEffect(() => {
        if (user) return;

        const fetchUser = async () => {
            setIsLoading(true)
            try {
                const user = await getCurrentUser()
                setUser(user)
            } catch {
                setUser(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUser()
    }, [user, setUser, setIsLoading])

    return <>{children}</>
}

export function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0.75 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.75 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-full h-full"
                >
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </motion.div>
            </AnimatePresence>
        </ThemeProvider>
    )
}