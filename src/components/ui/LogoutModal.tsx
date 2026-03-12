'use client'

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

type LogoutModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-400/50 dark:bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.75 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="relative w-full max-w-sm px-5 py-7.5 space-y-5 bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col items-center text-center gap-3.5">
                            <div className="w-12.5 h-12.5 flex items-center justify-center bg-orange-100 dark:bg-orange-800/10 text-orange-600 rounded-lg">
                                <AlertTriangle size={25} />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-base lg:text-lg text-slate-800 dark:text-white">Are you sure?</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    You are about to end your session. You will need to sign in again to access your dashboard.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3.5">
                            <button
                                onClick={onClose}
                                className="flex-1 px-3.5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 px-3.5 py-2.5 rounded-lg bg-linear-to-r from-purple-600 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-purple-600/25 transition-all cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}