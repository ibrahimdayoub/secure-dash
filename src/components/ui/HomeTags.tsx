"use client";

import { motion } from "framer-motion";
import { MessageSquare, Shield, Server } from 'lucide-react';

export default function HomeTags() {
    return (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="p-3.5 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg transition-all group">
                <Server className="mx-auto mb-1.25 text-purple-500 group-hover:scale-110 transition-transform" size={25} />
                <span className="text-sm uppercase text-slate-600 dark:text-slate-200">Server-Side Logic</span>
            </motion.div>
            <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="p-3.5 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg transition-all group">
                <Shield className="mx-auto mb-1.25 text-pink-500 group-hover:scale-110 transition-transform" size={25} />
                <span className="text-sm uppercase text-slate-600 dark:text-slate-200">Secure & Private</span>
            </motion.div>
            <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="p-3.5 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg transition-all group">
                <MessageSquare className="mx-auto mb-1.25 text-orange-500 group-hover:scale-110 transition-transform" size={25} />
                <span className="text-sm uppercase text-slate-600 dark:text-slate-200">Modern UX</span>
            </motion.div>
        </div>
    )
}