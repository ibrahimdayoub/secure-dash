import SignupForm from "@/components/forms/SignupForm";
import Link from "next/link";

export const metadata = { title: "Sign Up" };

export default function SignupPage() {
    return (
        <div className="relative min-h-screen p-5 flex items-center justify-center bg-white dark:bg-[#0f172a] transition-colors duration-300">
            <div className="absolute inset-0 bg-linear-to-tr from-purple-600/5 to-orange-600/5 dark:from-purple-600/10 dark:to-orange-600/10 pointer-events-none" />
            <div className="relative w-full max-w-md p-5 sm:px-10 sm:py-7.5 space-y-10 bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl border border-slate-200 dark:border-slate-800">
                {/* Header */}
                <div className="flex flex-col gap-1.25 items-center text-center">
                    <Link href="/" title='Bero Talker Messanger' className="h-15 w-15 mb-1.25 inline-flex items-center justify-center rounded-xl bg-linear-to-br from-purple-600 to-orange-600 shadow-lg shadow-purple-600/25 cursor-pointer">
                        <span className="text-2xl font-bold italic text-white">SD</span>
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Get Started</h1>
                    <p className="text-slate-600 dark:text-slate-400">Secure access. Explore the power of our unified dashboard today!</p>
                </div>
                {/* Form */}
                <SignupForm />
            </div>
        </div>
    );
} 