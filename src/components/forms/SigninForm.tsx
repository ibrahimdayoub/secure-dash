"use client";

import { useState, useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Mail, Lock, Sparkles, EyeOff, Eye } from 'lucide-react';
import { toast } from 'react-hot-toast'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/store/useAuthStore'
import { signin } from '@/actions/auth'
import { cn } from '@/lib/utils';

const signinSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters")
});

type SigninFormValues = z.infer<typeof signinSchema>;

export default function SigninForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { setUser } = useAuthStore()

    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninFormValues>({
        resolver: zodResolver(signinSchema),
        mode: "onBlur"
    });

    const onSubmit = (data: SigninFormValues) => {
        setError(null);

        // We use startTransition to handle the loading state and server-side execution.
        // Validation is performed via Zod/React Hook Form prior to invoking the Server Action,
        // avoiding the need for the native <form action={...} /> attribute and preventing submission conflicts.
        startTransition(async () => {
            const res = await signin(data);

            if (res.success && res.user) {
                setUser(res.user);
                router.push('/dashboard');
            } else {
                setUser(null);
                // setError(res.error || "An unknown error occurred");
                toast.error(res.error || "An unknown error occurred");
            }
        });
    };

    useEffect(() => {
        if (!error) return;

        const timer = setTimeout(() => {
            setError(null);
        }, 3500);

        return () => clearTimeout(timer);
    }, [error]);

    return (
        <>
            {/* Server Errors */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="text-red-500 text-sm lg:text-base text-center"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email Address */}
                <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest ml-1.25">
                        <Mail size={15} className="text-purple-600" /> Email Address
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="john.doe@company.com"
                        className={cn(
                            "w-full px-3.5 py-2.5 rounded-xl border outline-none transition-all bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-white focus:ring-2",
                            errors.email
                                ? "border-red-500 focus:ring-transparent"
                                : "border-slate-200 dark:border-slate-800 focus:ring-purple-600/25 focus:border-purple-600"
                        )}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message as string}</p>}
                </div>
                {/* Password */}
                <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest ml-1.25">
                        <Lock size={15} className="text-orange-600" /> Password
                    </label>
                    <div className="relative group">
                        <input
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className={cn(
                                "w-full px-3.5 py-2.5 pr-10 rounded-xl border outline-none transition-all bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-white focus:ring-2",
                                errors.password
                                    ? "border-red-500 focus:ring-transparent"
                                    : "border-slate-200 dark:border-slate-800 focus:ring-orange-600/25 focus:border-orange-600"
                            )}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400 hover:text-orange-600 transition-colors cursor-pointer"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message as string}</p>}
                </div>
                {/* Sign Up */}
                <div className="flex justify-between">
                    <span className="flex items-center gap-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest ml-1.25">
                        <Sparkles size={15} className="text-purple-600" /> New Here?
                    </span>
                    <Link href="/signup" className="text-purple-600 dark:text-purple-400 text-sm font-bold hover:text-orange-600 dark:hover:text-orange-400 transition-all underline underline-offset-2">
                        Create Account
                    </Link>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isPending}
                    className={cn(
                        "w-full py-2.5 flex items-center justify-center gap-2.5 text-white font-bold text-lg tracking-wider rounded-xl shadow-xl shadow-purple-600/25 transform transition-all active:scale-95 group",
                        isPending
                            ? "bg-purple-600 dark:bg-purple-400 cursor-not-allowed"
                            : "bg-linear-to-r from-purple-600 to-orange-600 hover:shadow-purple-600/50 cursor-pointer"
                    )}
                >
                    {
                        isPending ? (
                            <>
                                <Loader2 className="animate-spin" size={25} />
                                Signing In...
                            </>
                        ) : (
                            "Sign In"
                        )
                    }
                </button>
            </form>
        </>
    );
}